'use client';

import React, { useState } from 'react';
import { Cpu, Send, CheckCircle2, MessageCircle, Linkedin, Youtube, Instagram, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenConsultation: () => void;
  onOpenSourceModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSourceModal,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#05070e] border-t border-slate-800 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-right">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] glow-cyan">
                <div className="w-full h-full bg-[#070913] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">آکادمی شهزاد قنبری</span>
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                  Shahzad AI Academy
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              پیشرو در آموزش‌های فوق تخصصی و صنعتی هوش مصنوعی، مدل‌های زبانی بزرگ (LLMs)، عامل‌های
              خودمختار و معماری‌های یادگیری عمیق با منتورشیپ مستقیم مهندس شهزاد قنبری.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  صفحه اصلی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  دوره‌های تخصصی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  نقشه راه مهندسی AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  درباره استاد شهزاد قنبری
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  اطلاعات تماس
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSourceModal}
                  className="text-cyan-400 hover:underline transition-colors"
                >
                  دریافت سورس تکی HTML
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              شاخه‌های آموزشی
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-cyan-400 transition-colors text-right"
                >
                  معماری Large Language Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-cyan-400 transition-colors text-right"
                >
                  سیستم‌های چندعاملی (Multi-Agent)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-cyan-400 transition-colors text-right"
                >
                  یادگیری عمیق با PyTorch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-cyan-400 transition-colors text-right"
                >
                  معماری RAG و پایگاه‌های برداری
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-cyan-400 transition-colors text-right"
                >
                  بینایی ماشین و Vision Transformers
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              خبرنامه هوش مصنوعی
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              تحلیل هفتگی تازه‌ترین مقالات پژوهشی و فناوری‌های هوش مصنوعی با خلاصه اجرایی مهندس قنبری.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل کاری شما..."
                className="w-full bg-[#070913] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none glow-border-cyan placeholder-slate-500 font-mono"
              />
              <button
                type="submit"
                className="w-full py-2 bg-slate-800 hover:bg-cyan-500 hover:text-black transition-colors rounded-lg text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>عضویت در خبرنامه</span>
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>با تشکر، ایمیل شما در فهرست دریافت خبرنامه ثبت شد.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            تمامی حقوق مادی و معنوی متعلق به آکادمی هوش مصنوعی شهزاد قنبری می‌باشد © ۲۰۲۶
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>قوانین و مقررات آموزشی</span>
            <span>·</span>
            <span>حفظ حریم خصوصی</span>
            <span>·</span>
            <button onClick={onOpenConsultation} className="text-cyan-400 hover:underline">
              ثبت‌نام مشاوره‌ای
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
