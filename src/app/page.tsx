import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ScrollToTop from '@/components/ScrollToTop';
import SocialSidebar from '@/components/SocialSidebar';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Light Blue Glassmorphic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-200 via-blue-300 to-indigo-200 -z-10" />{' '}
      {/* Floating Header */}
      <Header />
      {/* Social Sidebar */}
      <SocialSidebar />
      {/* Main Container */}
      <div className="relative z-10 flex justify-center items-start min-h-screen pt-28">
        <div className="w-full max-w-[calc(100%-160px)] min-h-[calc(100vh-180px)] bg-white/50 backdrop-blur-lg border border-white/25 border-t-white/50 border-l-white/50 rounded-2xl shadow-xl mx-12 my-8 p-16">
          {/* Page Sections */}
          <div className="space-y-0">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>

          {/* Scroll to Top Button */}
          <ScrollToTop />
        </div>
      </div>
    </main>
  );
}
