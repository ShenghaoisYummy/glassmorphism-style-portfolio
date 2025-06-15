'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/content';
import { getMultipleRepos, ProcessedRepo } from '@/lib/github';

const RepoCard = ({ repo }: { repo: ProcessedRepo }) => {
  // Get first 3 languages
  const displayLanguages = repo.allLanguages.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="project-card bg-fuchsia-50/60 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl border border-slate-200/50 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <svg
          className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          />
        </svg>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-800 hover:text-blue-600 transition-colors truncate"
        >
          {repo.name}
        </a>
      </div>

      {/* Fork Info */}
      {repo.fork && repo.source && (
        <div className="text-xs text-gray-600 mb-2">
          Forked from{' '}
          <a
            href={repo.source.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            {repo.source.full_name}
          </a>
        </div>
      )}

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
        {repo.description || 'No description available'}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-4">
          {/* Languages - Show first 3 */}
          {displayLanguages.length > 0 && (
            <div className="flex items-center space-x-2">
              {displayLanguages.map(lang => (
                <div key={lang} className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-1"
                    style={{
                      backgroundColor:
                        repo.allLanguageColors[lang] || '#858585',
                    }}
                  />
                  <span className="text-xs">{lang}</span>
                </div>
              ))}
              {repo.allLanguages.length > 3 && (
                <span className="text-xs text-slate-400">
                  +{repo.allLanguages.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Stars */}
          {repo.stargazers_count > 0 && (
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mr-1 text-slate-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>
              <span>{repo.stargazers_count}</span>
            </div>
          )}

          {/* Forks */}
          {repo.forks > 0 && (
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mr-1 text-slate-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              <span>{repo.forks}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<ProcessedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const repoNames = projects.map(p => p.repo);
        const repoData = await getMultipleRepos(repoNames);
        setRepos(repoData);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch repositories:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="page-scroll py-20 px-8">
      <div className="container mx-auto max-w-full lg:max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          <span className="relative inline-block">
            <span className="tracking-[2px] px-[5px] bg-gradient-to-b from-transparent from-50% to-[#00ead3] to-50%">
              <span className="text-black">Projects</span>
            </span>
          </span>
        </motion.h2>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading projects...
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.map(repo => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
