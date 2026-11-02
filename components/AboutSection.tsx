'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Users, ShieldCheck, Check, Sparkles, Building2, Quote } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onNavigateToContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  onNavigateToContact,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#090d1c] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Portrait Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/25 to-purple-600/25 blur-xl -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 glass-card p-2 shadow-2xl">
                <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/founder_shahzad_1793626749156.jpg"
                    alt="مهندس شهزاد قنبری - پژوهشگر ارشد هوش مصنوعی و موسس آکادمی"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-white">مهندس شهزاد قنبری</h3>
                  <p className="text-xs text-cyan-400 mt-1 font-medium">
                    پژوهشگر ارشد هوش مصنوعی، مشاور سازمان‌ها و موسس آکادمی
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-3 text-xs text-slate-400 font-mono">
                    <span>AI Researcher</span>
                    <span>·</span>
                    <span>LLM Architect</span>
                    <span>·</span>
                    <span>Keynote Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 border border-cyan-500/30 bg-cyan-950/40 rounded-full px-4 py-1.5 glow-cyan-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>فلسفه آموزشی و تعهد ما به کیفیت</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              آموزش بدون حواشی تئوری؛{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                تسلط بر کدنویسی و پیاده‌سازی واقعی
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              آکادمی هوش مصنوعی و فناوری شهزاد قنبری با هدف شکستن دیوار بین مباحث آکادمیک و نیازهای
              بی‌رحم بازار کار بین‌المللی ایجاد شد. هوش مصنوعی امروزه نه یک ترند گذرا، بلکه ستون فقرات
              نسل بعد سیستم‌های نرم‌افزاری، مالی، پزشکی و صنعتی است.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              ما در این آکادمی وقت شما را با آموزش‌های سطحی و اسلایدهای بدون عمق تلف نمی‌کنیم. هر دانشجو
              مستقیماً درگیر نوشتن الگوریتم‌ها از صفر، دیباگ خطاهای تانسور، تست استرس ایجنت‌های هوشمند
              و استقرار پروژه‌های صنعتی در سرورهای ابری می‌شود.
            </p>

            {/* Core Values List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">سرفصل‌های همگام با آخرین مقالات NeurIPS و ICML</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    محتوای آموزشی هر فصل بازبینی شده و جدیدترین تکنیک‌های روز دنیا تدریس می‌گردد.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">جامعه تخصصی و کامیونیتی فعال</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    دسترسی دائمی به گروه خصوصی فارغ‌التحصیلان، تیم‌سازی برای پروژه‌ها و معرفی به فرصت‌های استخدام خارجی.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">منتورشیپ و پشتیبانی فنی مداوم</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    برگزاری جلسات کدریویو اختصاصی و رفع اشکال هفتگی به صورت مستقیم با مهندس شهزاد قنبری.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs glow-cyan"
              >
                درخواست جلسه ارزیابی و مشاوره
              </button>

              <button
                onClick={onNavigateToContact}
                className="px-5 py-3 rounded-xl glass-card text-slate-300 font-semibold text-xs hover:text-white hover:border-slate-600 transition-colors"
              >
                ارتباط با تیم پذیرش
              </button>
            </div>

          </div>

        </div>

        {/* Student Testimonials */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">دیدگاه دانش‌آموختگان آکادمی</h3>
            <p className="text-xs text-slate-400 mt-1">تجربه یادگیری و نتایج واقعی دانشجویان در بازار کار</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-right flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 text-cyan-400/60 mb-3" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  «دوره مهندسی LLM شهزاد قنبری دیدگاه من را کاملاً عوض کرد. بعد از پایان پروژه پایانی توانستم به عنوان مهندس هوش مصنوعی در یک استارتاپ اروپایی به صورت ریموت استخدام شوم.»
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">مهندس پوریا کریمی</h5>
                  <span className="text-[11px] text-slate-400">AI Engineer در شرکت NovuTech</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">دوره زمستان ۱۴۰۳</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-right flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 text-purple-400/60 mb-3" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  «کیفیت تدریس مفاهیم ریاضی و PyTorch بی‌نظیر بود. قبلاً بارها در دوره‌های مختلف شرکت کرده بودم ولی هیچ‌جا عمق ریاضیات و کاربرد عملی آن را مثل اینجا شفاف توضیح نداده بودند.»
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">دکتر مریم دانش‌پژوه</h5>
                  <span className="text-[11px] text-slate-400">پژوهشگر داده و بیوانفورماتیک</span>
                </div>
                <span className="text-xs text-purple-400 font-mono">دوره پاییز ۱۴۰۳</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-right flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 text-cyan-400/60 mb-3" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  «بخش ساخت ایجنت‌های هوشمند با LangGraph دقیقا همان چیزی بود که در تیم فنی شرکتمان برای اتوماسیون فرآیندهای مالی به آن نیاز داشتیم و در کمتر از یک ماه پیاده‌سازی کردیم.»
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">علیرضا معتمدی</h5>
                  <span className="text-[11px] text-slate-400">مدیر ارشد فنی Fintech Hub</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">دوره بهار ۱۴۰۴</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
