export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks: number;
  language: string;
  fork: boolean;
  source?: {
    html_url: string;
    full_name: string;
  };
}

export interface ProcessedRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks: number;
  language: string;
  languageColor: string;
  fork: boolean;
  source?: {
    html_url: string;
    full_name: string;
  };
}

// Cache for API responses
const cache = new Map<string, { data: GitHubRepo; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Language colors fallback
const DEFAULT_LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  React: '#61dafb',
  Vue: '#4FC08D',
  'C++': '#f34b7d',
  C: '#555555',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

async function fetchWithCache(url: string): Promise<GitHubRepo> {
  const cacheKey = url;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'glassFolio-portfolio',
    };

    // 确保正确设置 Authorization header
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });

    if (!response.ok) {
      if (response.status === 403) {
        const remaining = response.headers.get('x-ratelimit-remaining');
        const reset = response.headers.get('x-ratelimit-reset');
        const resetDate = reset
          ? new Date(parseInt(reset) * 1000).toLocaleString()
          : 'unknown';
        console.warn(
          `GitHub API rate limit exceeded. Remaining: ${remaining}, Reset at: ${resetDate}`
        );
      }
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const data = (await response.json()) as GitHubRepo;
    cache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    if (cached) {
      console.warn('Using expired cache data due to API error');
      return cached.data;
    }
    throw error;
  }
}

export async function getLanguageColors(): Promise<Record<string, string>> {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    );
    const colors = (await response.json()) as Record<
      string,
      { color?: string }
    >;

    // Transform the data to simple name -> color mapping
    const colorMap: Record<string, string> = {};
    Object.entries(colors).forEach(([lang, data]) => {
      if (data && data.color) {
        colorMap[lang] = data.color;
      }
    });

    return { ...DEFAULT_LANGUAGE_COLORS, ...colorMap };
  } catch (error) {
    console.error('Failed to fetch language colors:', error);
    return DEFAULT_LANGUAGE_COLORS;
  }
}

export async function getGitHubRepo(repoName: string): Promise<ProcessedRepo> {
  try {
    const [repoData, languageColors] = await Promise.all([
      fetchWithCache(`https://api.github.com/repos/${repoName}`),
      getLanguageColors(),
    ]);

    // Process emoji in description
    let description = repoData.description || '';

    // Simple emoji processing (can be enhanced)
    description = description.replace(/:\w+:/g, (match: string) => {
      // You can expand this with actual emoji mapping if needed
      return match; // For now, keep the text as is
    });

    return {
      name: repoData.name,
      description,
      html_url: repoData.html_url,
      stargazers_count: repoData.stargazers_count || 0,
      forks: repoData.forks || 0,
      language: repoData.language || '',
      languageColor: languageColors[repoData.language] || '#858585',
      fork: repoData.fork || false,
      source: repoData.source
        ? {
            html_url: repoData.source.html_url,
            full_name: repoData.source.full_name,
          }
        : undefined,
    };
  } catch (error) {
    console.error(`Failed to fetch repository ${repoName}:`, error);

    // Return fallback data
    return {
      name: repoName.split('/')[1] || repoName,
      description: 'Repository information unavailable',
      html_url: `https://github.com/${repoName}`,
      stargazers_count: 0,
      forks: 0,
      language: '',
      languageColor: '#858585',
      fork: false,
    };
  }
}

export async function getMultipleRepos(
  repoNames: string[]
): Promise<ProcessedRepo[]> {
  // Process repositories in parallel but with rate limiting
  const BATCH_SIZE = 3;
  const results: ProcessedRepo[] = [];

  for (let i = 0; i < repoNames.length; i += BATCH_SIZE) {
    const batch = repoNames.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.allSettled(
      batch.map(repoName => getGitHubRepo(repoName))
    );

    batchResults.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        results.push(result.value);
      } else {
        console.error(`Failed to fetch ${batch[index]}:`, result.reason);
        // Add fallback repo data
        const repoName = batch[index];
        results.push({
          name: repoName.split('/')[1] || repoName,
          description: 'Repository information unavailable',
          html_url: `https://github.com/${repoName}`,
          stargazers_count: 0,
          forks: 0,
          language: '',
          languageColor: '#858585',
          fork: false,
        });
      }
    });

    // Small delay between batches to avoid rate limiting
    if (i + BATCH_SIZE < repoNames.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return results;
}
