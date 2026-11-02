'use client';

import React, { useState } from 'react';
import { Terminal, BrainCircuit, Network, Bot, Cloud, CheckCircle, ArrowDown } from 'lucide-react';

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  duration: string;
  topics: string[];
  outcome: string;
  color: string;
}

const ROADMAP_STEPS: Step[] = [
  {
    id: 1,
    icon: Terminal,
    title: 'فاز اول: مبانی عمیق برنامه‌نویسی و ریاضیات AI',
    duration: '۴ تا ۶ هفته',
    topics: ['Python پیشرفته و OOP', 'جبر خطی کاربردی و محاسبات ماتریسی', 'حساب دیفرانسیل و گرادیان‌ها', 'آمار، احتمال و بهینه‌سازی'],
    outcome: 'درک بنیادی ساختار داده‌های تانسوری و نوشتن کدهای استاندارد تمیز بدون وابستگی‌های کورکورانه',
    color: 'cyan',
  },
  {
    id: 2,
    icon: BrainCircuit,
    title: 'فاز دوم: یادگیری عمیق و شبکه‌های عصبی با PyTorch',
    duration: '۶ تا ۸ هفته',
    topics: ['تانسورها و Autograd در PyTorch', 'شبکه‌های چندلایه MLP و Backpropagation', 'شبکه‌های کانولوشنی (CNNs)', 'الگوریتم‌های بهینه‌سازی AdamW و کاهش نرخ یادگیری'],
    outcome: 'توانایی پیاده‌سازی و آموزش انواع مدل‌های یادگیری عمیق روی GPU با بازدهی بالا',
    color: 'purple',
  },
  {
    id: 3,
    icon: Network,
    title: 'فاز سوم: معماری ترنسفورمرها و مدل‌های زبانی (LLMs)',
    duration: '۶ هفته',
    topics: ['مکانیزم Self-Attention و Multi-Head', 'معماری GPT، LLaMA و Mistral', 'تکنیک‌های فاین‌تیونینگ LoRA و QLoRA', 'ساخت پایپ‌لاین‌های پیشرفته RAG با Vector DBs'],
    outcome: 'تسلط کامل بر طراحی سامانه‌های هوشمند مبتنی بر پردازش زبان طبیعی و مدل‌های مدرن سازمانی',
    color: 'cyan',
  },
  {
    id: 4,
    icon: Bot,
    title: 'فاز چهارم: عامل‌های خودمختار (Agentic AI) و سیستم‌های چندعاملی',
    duration: '۴ تا ۵ هفته',
    topics: ['الگوی ReAct و زنجیره تفکر استدلالی', 'نمودارهای وضعیت در LangGraph', 'هماهنگی چند ایجنت با CrewAI', 'ابزارسازی و Tool-calling پیشرفته'],
    outcome: 'خلق ایجنت‌های هوشمندی که مستقلاً تصمیم گرفته، کد اجرا می‌کنند و مسائل چندوجهی را حل می‌نمایند',
    color: 'purple',
  },
  {
    id: 5,
    icon: Cloud,
    title: 'فاز پنجم: استقرار، MLOps و مقیاس‌پذیری صنعتی',
    duration: '۳ تا ۴ هفته',
    topics: ['کانتینرسازی با Docker', 'سرورهای استنتاج فوق‌سریع با vLLM و TensorRT-LLM', 'مانیتورینگ و مشاهده‌پذیری مدل‌ها', 'امنیت و Guardrails در هوش مصنوعی'],
    outcome: 'ارائه مدل‌ها به صورت سرویس‌های قابل اتکا با لیتنسی میلی‌ثانیه‌ای و مصرف بهینه حافظه',
    color: 'cyan',
  },
];

export const RoadmapSection: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-cyan-400 tracking-wider">
            مسیر استاندارد یادگیری
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            نقشه راه تبدیل شدن به معمار ارشد هوش مصنوعی
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            مسیری گام‌به‌گام و استاندارد از پایه‌ای‌ترین فرمول‌های ریاضی تا مدیریت مدل‌های میلیارد پارامتری
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {ROADMAP_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full p-4 rounded-xl text-right transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-slate-800/90 border-cyan-500/50 glow-cyan-sm text-white'
                      : 'glass-card border-slate-800/80 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{step.title}</h4>
                      <span className="text-xs text-slate-400 font-mono mt-0.5 block">
                        مدت زمان تخمینی: {step.duration}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    ۰{step.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel (7 cols) */}
          <div className="lg:col-span-7">
            {ROADMAP_STEPS.map((step) => {
              if (step.id !== activeStep) return null;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl space-y-6 text-right animate-fadeIn"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] glow-cyan">
                        <div className="w-full h-full bg-[#070913] rounded-[11px] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-cyan-400 font-mono">مرحله ۰{step.id} از ۰۵</span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 bg-slate-800 text-purple-300 rounded-lg font-mono">
                      {step.duration}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      مباحث کلیدی این مرحله:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {step.topics.map((topic, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/25">
                    <h5 className="text-xs font-bold text-cyan-300 mb-1">خروجی و دستاورد عملی:</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.outcome}</p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      نیاز به ارزیابی سطح فعلی دارید؟
                    </span>
                    <button
                      onClick={onConsult}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs glow-cyan-sm"
                    >
                      تعیین سطح با مشاور
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
