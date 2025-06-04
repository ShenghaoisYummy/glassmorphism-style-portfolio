# 🌟 GlassFolio - Modern Portfolio Website

A stunning, modern developer portfolio built with **Next.js 14**, featuring glassmorphism design, dynamic GitHub integration, and scalable content management.

## ✨ Features

### 🎨 **Modern Design**

- **Glassmorphism UI** - Beautiful frosted glass effects
- **Framer Motion** animations and interactions
- **Responsive design** for all devices
- **Dark/Light theme** support

### 🚀 **Performance & Scalability**

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for efficient styling
- **Dynamic GitHub API** integration with caching
- **MDX support** for blog content

### 🛠 **Developer Experience**

- **ESLint + Prettier** for code quality
- **Husky + lint-staged** for Git hooks
- **GitHub Actions** CI/CD pipeline
- **Vercel deployment** ready

## 🏗️ **Architecture**

### **Solved Scalability Issues:**

#### ✅ **Content Management**

- **Before**: Hard-coded HTML content
- **After**: TypeScript interfaces + JSON/MDX files
- **Benefits**: Easy content updates, type safety, version control

#### ✅ **Code Structure**

- **Before**: Monolithic HTML file
- **After**: Modular React components
- **Benefits**: Reusable components, maintainable codebase

#### ✅ **API Integration**

- **Before**: No fallback handling
- **After**: Robust caching + error handling
- **Benefits**: Reliable GitHub data, offline support

## 🚀 **Quick Start**

### **Prerequisites**

- Node.js 18+
- npm or yarn
- Git

### **Installation**

```bash
# Clone the repository
git clone https://github.com/your-username/glassFolio.git
cd glassFolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

### **Environment Variables**

Create a `.env.local` file:

```env
# Optional: GitHub token for higher API rate limits
GITHUB_TOKEN=your_github_token_here

# For deployment
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

## 📁 **Project Structure**

```
glassFolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── HeroSection.tsx  # Landing section
│   │   ├── SkillsSection.tsx# Skills showcase
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/
│   │   └── content.ts       # Content configuration
│   └── lib/
│       └── github.ts        # GitHub API integration
├── content/                 # MDX content
│   ├── blog/               # Blog posts
│   └── projects/           # Project descriptions
├── public/                 # Static assets
│   └── assets/            # Images, icons
├── .github/
│   └── workflows/         # CI/CD pipelines
└── package.json
```

## 🎯 **Customization**

### **1. Personal Information**

Edit `src/data/content.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  logo: 'YN',
  title: "Hi all, I'm Your Name",
  description: 'Your description here...',
  blogUrl: 'https://your-blog.com',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    // ... other links
  },
};
```

### **2. Skills & Experience**

Update the `skills` and `experiences` arrays in the same file.

### **3. Projects**

Add your GitHub repositories to the `projects` array:

```typescript
export const projects: Project[] = [
  { repo: 'yourusername/project-name', featured: true },
  // ... more projects
];
```

### **4. Blog Content**

Create MDX files in `content/blog/`:

```markdown
---
title: 'Your Blog Post'
description: 'Post description'
date: '2024-01-01'
author: 'Your Name'
tags: ['tag1', 'tag2']
---

# Your content here...
```

## 🚀 **Deployment**

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push to main

### **Manual Deployment**

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 **Development Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Check TypeScript types
npm run format       # Format code with Prettier
```

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Original design inspiration from glassmorphism trends
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- GitHub for API and version control

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
