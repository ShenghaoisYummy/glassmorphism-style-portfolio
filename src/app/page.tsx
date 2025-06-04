import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Glassmorphic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 -z-10" />

      {/* Main Container */}
      <div className="relative z-10 flex justify-center items-start min-h-screen">
        <div className="w-full max-w-[calc(100%-100px)] min-h-[calc(100vh-140px)] bg-white/50 backdrop-blur-lg border border-white/25 border-t-white/50 border-l-white/50 rounded-2xl shadow-xl mx-12 my-8 p-12">
          {/* Header */}
          <Header />

          {/* Page Sections */}
          <div className="space-y-0">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </div>

          {/* Scroll to Top Button */}
          <ScrollToTop />
        </div>
      </div>
    </main>
  );
}
