'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, MapPin, CheckCircle2, MessageSquareText, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'courses',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-cyan-400 tracking-wider">
            پل ارتباطی مستقیم
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">تماس با آکادمی و ثبت درخواست</h2>
          <p className="text-slate-400 text-sm mt-2">
            تیم کارشناسان و مشاوران آموزشی ما در کوتاه‌ترین زمان ممکن پاسخگوی شما خواهند بود.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-right">
            
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400">تماس تلفنی مستقیم با دپارتمان پذیرش</span>
                <p className="text-sm sm:text-base font-bold text-white font-mono tabular-nums dir-ltr text-right mt-0.5">
                  ۰۲۱ - ۸۸۲۲ ۳۳۴۴
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400">پست الکترونیک رسمی آکادمی</span>
                <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                  info@shahzadacademy.ai
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg shrink-0">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400">کانال تلگرام و پشتیبانی سریع</span>
                <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                  @ShahzadGhanbariAI
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400">دفتر مرکزی و آزمایشگاه تحقیقاتی</span>
                <p className="text-sm font-bold text-white mt-0.5">
                  تهران، خیابان ولیعصر، تقاطع فاطمی، برج فناوری، طبقه ۸
                </p>
              </div>
            </div>

            {/* Working Hours Badge */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>ساعات پاسخگویی: شنبه تا چهارشنبه ۹ الی ۱۸ | پنج‌شنبه‌ها ۹ الی ۱۴</span>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl text-right">
              <h3 className="text-xl font-bold text-white mb-1">ارسال پیام یا طرح پرسش آموزشی</h3>
              <p className="text-xs text-slate-400 mb-6">
                پرسش خود درباره دوره‌ها، پیش‌نیازها و شرایط پرداخت اقساطی را با ما در میان بگذارید.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">پیام شما با موفقیت ثبت گردید</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    کارشناس ارشد آموزشی آکادمی حداکثر تا ۲ ساعت کاری آینده از طریق شماره {formData.phone} با شما تماس خواهد گرفت.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', subject: 'courses', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-800 text-xs text-slate-200 hover:text-white"
                  >
                    ارسال پیام دیگر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                        نام و نام خانوادگی <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: پویا رضوانی"
                        className="w-full bg-[#070913]/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                        شماره تلفن همراه <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="w-full bg-[#070913]/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan placeholder-slate-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                      موضوع استعلام یا پیام
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#070913]/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan"
                    >
                      <option value="courses">استعلام ظرفیت و پیش‌نیازهای دوره‌ها</option>
                      <option value="consult">مشاوره تعیین سطح و نقشه راه اختصاصی</option>
                      <option value="corporate">قرارداد آموزش سازمانی و توانمندسازی پرسنل</option>
                      <option value="installment">اطلاع از شرایط پرداخت اقساطی شهریه</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                      متن پیام یا توضیحات تکمیلی <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="زمینه تحصیلی، سابقه برنامه‌نویسی یا هدف خود از یادگیری هوش مصنوعی را به اختصار بیان کنید..."
                      className="w-full bg-[#070913]/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none glow-border-cyan placeholder-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-lg glow-cyan flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال پیام به مشاوران آکادمی</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
