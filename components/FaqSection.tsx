'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'آیا برای ورود به دوره‌ها نیاز به داشتن پیش‌زمینه قوی ریاضیات دانشگاهی است؟',
    a: 'خیر، مبانی ریاضیات مورد نیاز شامل جبر خطی، مشتق و احتمالات در هفته‌های آغازین دوره‌ها به زبان شیوا، مفهومی و به همراه پیاده‌سازی کدنویسی تدریس می‌گردد.',
  },
  {
    q: 'کلاس‌ها به چه صورت برگزار می‌شوند و آیا ویدیوها در دسترس خواهند بود؟',
    a: 'کلاس‌ها به شکل ترکیبی (لایو تعاملی آنلاین با سرور اختصاصی + ضبط با کیفیت استودیویی 4K) برگزار شده و ویدیوها بدون محدودیت زمانی در پنل اختصاصی دانشجویان قرار می‌گیرند.',
  },
  {
    q: 'آیا امکان پرداخت اقساطی شهریه برای دانشجویان وجود دارد؟',
    a: 'بله، در جلسه مشاوره اولیه، امکان تقسیط شهریه در ۲ تا ۴ قسط بدون کارمزد برای دانشجویان و متقاضیان فراهم می‌شود.',
  },
  {
    q: 'مدرک پایان دوره چه اعتباری دارد؟',
    a: 'گواهی‌نامه رسمی آکادمی هوش مصنوعی شهزاد قنبری دارای کد پیگیری آنلاین دوزبانه (فارسی و انگلیسی) است که در لینکدین و رزومه‌های بین‌المللی قابل اعتبارسنجی می‌باشد.',
  },
  {
    q: 'پشتیبانی و رفع اشکال بعد از ساعات کلاس چگونه انجام می‌پذیرد؟',
    a: 'دانشجویان در کانال‌ها و گروه‌های اختصاصی تلگرام و دیسکورد با دستیاران آموزشی (TA) و شخص مهندس قنبری در تماس مستقیم هستند و جلسات حل تمرین اختصاصی هفتگی برگزار می‌شود.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#090d1c] border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-purple-400 tracking-wider">
            پاسخ به سوالات متداول
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            پرسش‌های پرتکرار متقاضیان
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            هرآنچه پیش از ثبت‌نام در دوره‌های آکادمی باید بدانید
          </p>
        </div>

        <div className="space-y-3 text-right">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed pr-12">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
