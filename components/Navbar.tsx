'use client';

import React, { useState } from 'react';
import { Cpu, Headset, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: (course?: string) => void;
  onOpenSourceModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation,
  onOpenSourceModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'صفحه اصلی' },
    { id: 'courses', label: 'دوره‌ها' },
    { id: 'roadmap', label: 'نقشه راه' },
    { id: 'about', label: 'درباره ما' },
    { id: 'contact', label: 'تماس با ما' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-right group whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] glow-cyan">
            <div className="w-full h-full bg-[#070913] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              آکادمی شهزاد قنبری
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
              Shahzad AI Academy
            </span>
          </div>
        </button>

        {/* Zone 2: 4–5 Clean Single-Line Text Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors whitespace-nowrap relative py-1 focus:outline-none ${
                activeSection === item.id
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Utility code export */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenSourceModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-700/60 transition-colors whitespace-nowrap"
            title="مشاهده و دانلود کد HTML تکی درخواستی"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>کد HTML تکی</span>
          </button>

          <button
            onClick={() => onOpenConsultation()}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-semibold rounded-xl group bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg glow-cyan whitespace-nowrap"
          >
            <span className="relative px-3.5 sm:px-4 py-2 transition-all ease-in duration-150 bg-[#070913] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              <Headset className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
              <span>ثبت‌نام مشاوره‌ای</span>
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="منوی سایت"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-right py-2 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSourceModal();
              }}
              className="w-full py-2.5 text-center text-xs text-cyan-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>مشاهده و کپی سورس HTML تکی</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg"
            >
              ثبت‌نام مشاوره‌ای رایگان
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
