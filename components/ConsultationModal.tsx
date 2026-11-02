'use client';

import React, { useState, useEffect } from 'react';
import { X, Headset, CheckCircle2, Clock, Calendar, Sparkles, Phone, User } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialCourse = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(initialCourse || 'مهندسی تخصصی مدل‌های زبانی (LLMs)');
  const [prevInitialCourse, setPrevInitialCourse] = useState(initialCourse);

  if (initialCourse !== prevInitialCourse) {
    setPrevInitialCourse(initialCourse);
    setCourse(initialCourse || 'مهندسی تخصصی مدل‌های زبانی (LLMs)');
  }

  const [experienceLevel, setExperienceLevel] = useState('intermediate');
  const [preferredTime, setPreferredTime] = useState('afternoon');
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const randomCode = 'SG-' + Math.floor(100000 + Math.random() * 900000);
    setTrackingId(randomCode);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg glass-card border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl glow-cyan text-right">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="بستن"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white">ثبت‌نام مشاوره‌ای با موفقیت انجام شد</h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              اطلاعات شما در سیستم پذیرش آکادمی شهزاد قنبری ثبت شد. کارشناس ارشد آموزشی جهت ارزیابی سطح
              و هماهنگی نقشه راه تخصصی با شما تماس خواهد گرفت.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-right space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">کد پیگیری درخواست:</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">{trackingId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">نام متقاضی:</span>
                <span className="text-white font-medium">{name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">زمینه یا دوره انتخابی:</span>
                <span className="text-purple-300 font-medium">{course}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">شماره ثبت‌شده:</span>
                <span className="text-white font-mono">{phone}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              متوجه شدم و بستن
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-medium mb-1">
                <Headset className="w-3.5 h-3.5" />
                <span>رزرو رایگان جلسه ارزیابی و مشاوره تخصصی</span>
              </div>
              <h3 className="text-xl font-bold text-white">ثبت‌نام مشاوره‌ای آکادمی شهزاد قنبری</h3>
              <p className="text-xs text-slate-400 mt-1">
                پیش از هرگونه تصمیم یا پرداخت، با کارشناسان آکادمی گفتگو کنید و نقشه راه متناسب با رزومه
                خود را دریافت نمایید.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                  نام و نام خانوادگی <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: آرش علیزاده"
                    className="w-full bg-[#070913] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan placeholder-slate-500"
                  />
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                  شماره تلفن همراه (جهت تماس کارشناس) <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full bg-[#070913] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan placeholder-slate-500 font-mono"
                  />
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                  دوره یا موضوع مشاوره
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full bg-[#070913] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan"
                >
                  <option value="مهندسی تخصصی مدل‌های زبانی (LLMs)">مهندسی تخصصی مدل‌های زبانی (LLMs)</option>
                  <option value="طراحی و توسعه عامل‌های هوشمند (Agents)">طراحی و توسعه عامل‌های هوشمند (Agents)</option>
                  <option value="یادگیری عمیق کاربردی و شبکه‌های عصبی">یادگیری عمیق کاربردی و شبکه‌های عصبی</option>
                  <option value="بینایی ماشین نوین و مدل‌های چندرسانه‌ای">بینایی ماشین نوین و چندرسانه‌ای</option>
                  <option value="مشاوره عمومی انتخاب مسیر شغلی">مشاوره عمومی برای تعیین نقشه راه اختصاصی</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                  سطح آشنایی فعلی شما با هوش مصنوعی و برنامه‌نویسی
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setExperienceLevel('beginner')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      experienceLevel === 'beginner'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    مبتدی
                  </button>
                  <button
                    type="button"
                    onClick={() => setExperienceLevel('intermediate')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      experienceLevel === 'intermediate'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    متوسط
                  </button>
                  <button
                    type="button"
                    onClick={() => setExperienceLevel('advanced')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      experienceLevel === 'advanced'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    پیشرفته
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                  بازه زمانی پیشنهادی برای تماس تلفنی
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPreferredTime('morning')}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      preferredTime === 'morning'
                        ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    ۱۰ الی ۱۳ (صبح)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredTime('afternoon')}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      preferredTime === 'afternoon'
                        ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    ۱۳ الی ۱۷ (بعدازظهر)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredTime('evening')}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      preferredTime === 'evening'
                        ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    ۱۷ الی ۲۰ (عصر)
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg glow-cyan mt-3 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>ثبت نهایی درخواست مشاوره رایگان</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
