'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CoursesSection } from '@/components/CoursesSection';
import { AboutSection } from '@/components/AboutSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { HtmlSourceModal } from '@/components/HtmlSourceModal';
import { Cpu, Terminal, Laptop, Users, ShieldAlert, Award } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultCourse, setConsultCourse] = useState('');
  const [sourceModalOpen, setSourceModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (courseTitle?: string) => {
    setConsultCourse(courseTitle || '');
    setConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col circuit-grid relative overflow-x-hidden">
      
      {/* Ambient Lighting Orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Main Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
        onOpenSourceModal={() => setSourceModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <div id="home">
          <Hero
            onExploreCourses={() => handleNavigate('courses')}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        </div>

        {/* 2. Educational & Industrial Pillars Strip */}
        <section className="py-16 bg-[#090d1c] border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                مزیت‌های متمایز آکادمی شهزاد قنبری
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                رویکرد آموزشی مبتنی بر شبیه‌سازی محیط‌های واقعی تحقیق و توسعه (R&D) شرکت‌های پیشروی جهان
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
              <div className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  سرفصل‌های روز دنیا (Edge of AI)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  محتوای آموزشی متناسب با آخرین مقالات کنفرانس‌های معتبر NeurIPS و انتشار مدل‌های نوین
                  OpenAI و Google DeepMind بازطراحی می‌شود.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl mb-4">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  پروژه‌های عملیاتی سطح سازمانی
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  به‌جای تمرین‌های مصنوعی، روی پایپ‌لاین‌های واقعی RAG، بهینه‌سازی محاسباتی GPU و
                  استقرار ابری ایجنت‌ها کار می‌کنید.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  منتورشیپ مستقیم شهزاد قنبری
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  جلسات هفتگی حل مسئله، رفع اشکال تخصصی، بررسی معماری پروژه‌ها و راهنمایی ورود به بازار
                  کار بین‌المللی.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Comprehensive Course Catalog */}
        <CoursesSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Tech Roadmap Visualizer */}
        <RoadmapSection onConsult={() => handleOpenConsultation('مشاوره نقشه راه تخصصی')} />

        {/* 5. About the Founder & Academy Vision */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation()}
          onNavigateToContact={() => handleNavigate('contact')}
        />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />

        {/* 7. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSourceModal={() => setSourceModalOpen(true)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        initialCourse={consultCourse}
      />

      {/* Single Clean HTML Source & Export Modal */}
      <HtmlSourceModal
        isOpen={sourceModalOpen}
        onClose={() => setSourceModalOpen(false)}
      />

    </div>
  );
}
