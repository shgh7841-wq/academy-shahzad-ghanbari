'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onOpenConsultation }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Natural Human Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 border border-cyan-500/30 bg-cyan-950/40 rounded-full px-4 py-1.5 glow-cyan-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>دوره تخصصی هوش مصنوعی نسل جدید ۲۰۲۶</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.25] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              تسلط بر آینده فناوری با{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-purple-500">
                آکادمی هوش مصنوعی شهزاد قنبری
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              از مبانی پایتون و ریاضیات یادگیری عمیق تا پیاده‌سازی مدل‌های زبانی بزرگ (LLMs)،
              عامل‌های خودمختار و پایپ‌لاین‌های سازمانی هوش مصنوعی. آموزش عمیق، پروژه‌محور و مطابق با
              پیشرفته‌ترین استانداردهای بین‌المللی.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCourses}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-lg glow-cyan flex items-center gap-2 whitespace-nowrap"
              >
                <span>مشاهده دوره‌های تخصصی</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:border-cyan-400/50 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>رزرو جلسه مشاوره اختصاصی</span>
              </button>
            </div>

            {/* Adjoining Proof Metrics & KPIs with Tabular Numerals */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-right">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
                  ۳,۴۰۰+
                </div>
                <div className="text-xs text-slate-400 mt-1">دانش‌آموخته موفق</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tabular-nums">
                  ۹۴٪
                </div>
                <div className="text-xs text-slate-400 mt-1">جذب در شرکت‌های معتبر و فریلنسینگ</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  ۴.۹ / ۵
                </div>
                <div className="text-xs text-slate-400 mt-1">امتیاز رضایت فراگیران</div>
              </div>
            </div>

          </div>

          {/* Visual Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-slate-700/60 shadow-2xl glow-cyan">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/hero_ai_academy_1793626749286.jpg"
                  alt="آزمایشگاه هوش مصنوعی شهزاد قنبری"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Glassmorphic Overlay Card */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-xl glass-nav border border-cyan-500/30 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>دوره جدید پاییز ۱۴۰۴</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    معماری چندعاملی با LangGraph و CrewAI
                  </h4>
                </div>
                <span className="text-xs px-2.5 py-1 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/40 font-mono">
                  ظرفیت محدود
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
