'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, BookOpen, Check, Layers, Sparkles, X, ChevronRight } from 'lucide-react';

export interface Course {
  id: string;
  category: 'llm' | 'agents' | 'deep' | 'vision';
  title: string;
  englishTitle: string;
  tags: string[];
  level: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  syllabus: string[];
  prerequisites: string;
  projects: string[];
}

const COURSES_DATA: Course[] = [
  {
    id: 'llm-engineering',
    category: 'llm',
    title: 'مهندسی تخصصی مدل‌های زبانی بزرگ (LLM Engineering)',
    englishTitle: 'Advanced Large Language Models & Prompt Architecture',
    tags: ['Transformers', 'LoRA / QLoRA', 'RAG Pipelines', 'Vector DBs'],
    level: 'پیشرفته',
    duration: '۴۸ ساعت آموزش تخصصی',
    price: '۸٬۹۰۰٬۰۰۰ تومان',
    description:
      'آموزش عمیق معماری ترنسفورمرها، فاین‌تیونینگ مدل‌های منبع‌باز نظیر Llama و Mistral، ساخت پایپ‌لاین‌های پیشرفته RAG با ارزیابی Ragas و بهینه‌سازی استنتاج vLLM.',
    image: '/images/course_llm_neural_1793626749313.jpg',
    syllabus: [
      'اصول ریاضی و ساختار Attention در ترنسفورمرها',
      'تکنیک‌های Tokenization و Embedding پیشرفته',
      'فاین‌تیونینگ با PEFT، LoRA و QLoRA روی GPU',
      'معماری بازیابی افزوده متنی (RAG) با Qdrant و Milvus',
      'ارزیابی کیفیت پاسخ‌ها و فیلتر توهم (Hallucination Detection)',
      'دیپلوی پروداکشن با vLLM، Docker و Ray Serve',
    ],
    prerequisites: 'آشنایی متوسط با پایتون و اصول یادگیری ماشین',
    projects: [
      'دستیار حقوقی سازمانی با قابلیت جستجوی اسناد چند ده‌هزار صفحه‌ای',
      'فاین‌تیون مدل ۷ میلیاردی برای تولید کدهای تخصصی سازمانی',
    ],
  },
  {
    id: 'autonomous-agents',
    category: 'agents',
    title: 'طراحی و توسعه عامل‌های هوشمند (Autonomous AI Agents)',
    englishTitle: 'Multi-Agent Architectures with LangGraph & CrewAI',
    tags: ['LangGraph', 'CrewAI', 'Tool Calling', 'Planning & Reflection'],
    level: 'متوسط تا پیشرفته',
    duration: '۳۶ ساعت کارگاهی',
    price: '۷٬۵۰۰٬۰۰۰ تومان',
    description:
      'طراحی سیستم‌های چندعاملی خودمختار با حافظه بلندمدت، استدلال چندمرحله‌ای (ReAct & Chain-of-Thought)، تعامل مستقیم با APIها و مدیریت خطای خودکار.',
    image: '/images/course_ai_agents_1793626750324.jpg',
    syllabus: [
      'مفاهیم پایه ایجنت‌ها: حلقه فکر-اقدام-مشاهده (ReAct)',
      'پیاده‌سازی نمودارهای حالت (State Graphs) با LangGraph',
      'تقسیم کار و هماهنگی چند ایجنت با CrewAI',
      'ابزارسازی و اتصال امن به پایگاه‌های داده و APIهای ثالث',
      'حافظه معنایی و استراتژی‌های Human-in-the-loop',
      'ارزیابی امنیت و جلوگیری از حملات Prompt Injection در ایجنت‌ها',
    ],
    prerequisites: 'آشنایی با مبانی کار با API و زبان پایتون',
    projects: [
      'تیم تحلیل‌گر خودکار بازار سرمایه با ۳ عامل مستقل (پژوهشگر، تحلیل‌گر، گزارش‌نویس)',
      'عامل پشتیبانی فنی خودکار با توانایی عیب‌یابی سرور و حل تیکت',
    ],
  },
  {
    id: 'deep-learning-pytorch',
    category: 'deep',
    title: 'یادگیری عمیق کاربردی و شبکه‌های عصبی (Deep Learning)',
    englishTitle: 'Deep Learning with PyTorch from Scratch',
    tags: ['PyTorch', 'Backpropagation', 'CNNs', 'Optimization'],
    level: 'مقدماتی تا پیشرفته',
    duration: '۶۰ ساعت آموزش تئوری و عملی',
    price: '۶٬۸۰۰٬۰۰۰ تومان',
    description:
      'تسلط بر پایه‌های ریاضی، جبر خطی و گرادیان‌ها در PyTorch. پیاده‌سازی گام به گام انواع شبکه‌های MLP، کانولوشنی (CNN)، بازگشتی و مکانیزم‌های توجه مدرن.',
    image: '/images/hero_ai_academy_1793626749286.jpg',
    syllabus: [
      'جبر خطی، حساب دیفرانسیل چندمتغیره و احتمال برای هوش مصنوعی',
      'معماری تانسورها و Autograd در کتابخانه PyTorch',
      'الگوریتم‌های بهینه‌سازی: SGD، AdamW و یادگیری با نرخ پویا',
      'شبکه‌های کانولوشنی برای بینایی ماشین و ResNet',
      'تکنیک‌های جلوگیری از Overfitting و تنظیم دقیق هایپرپارامترها',
      'آموزش توزیع‌شده با DistributedDataParallel (DDP)',
    ],
    prerequisites: 'علاقه‌مندی به برنامه‌نویسی و ریاضیات دبیرستان/دانشگاه',
    projects: [
      'پیاده‌سازی شبکه ResNet از صفر و طبقه‌بندی تصاویر پزشکی',
      'سیستم پیش‌بینی سری‌های زمانی قیمت تجهیزات با تلفیق CNN و LSTM',
    ],
  },
  {
    id: 'computer-vision',
    category: 'vision',
    title: 'بینایی ماشین نوین و مدل‌های چندرسانه‌ای (Computer Vision)',
    englishTitle: 'Modern Vision Transformers & Multimodal AI',
    tags: ['Vision Transformers (ViT)', 'YOLOv11', 'Diffusion Models', 'OpenCV'],
    level: 'پیشرفته',
    duration: '۴۰ ساعت آموزش',
    price: '۷٬۲۰۰٬۰۰۰ تومان',
    description:
      'بررسی جدیدترین دستاوردهای پردازش تصویر، از تشخیص شیء بلادرنگ با خانواده YOLO تا ترنسفورمرهای بینایی (ViT) و درک مدل‌های چندوجهی (Multimodal Vision-Language).',
    image: '/images/course_ai_agents_1793626750324.jpg',
    syllabus: [
      'تکنیک‌های پیشرفته پردازش تصویر با OpenCV و Torchvision',
      'آشکارسازی شیء در زمان واقعی (Object Detection) با YOLOv11',
      'بخش‌بندی دقیق تصویر (Semantic & Instance Segmentation)',
      'معماری Vision Transformers و مدل‌های پیش‌آموزش‌دیده CLIP',
      'آشنایی با مبانی ریاضی مدل‌های انتشاری (Stable Diffusion)',
      'پیاده‌سازی مدل‌های بررسی کیفیت محصولات در خطوط تولید صنعتی',
    ],
    prerequisites: 'آشنایی با پایتون و مفاهیم اولیه یادگیری عمیق',
    projects: [
      'سیستم کنترل کیفیت خودکار با دوربین صنعتی و تشخیص نقص‌های میکروسکوپی',
      'موتور جستجوی چندوجهی متن-تصویر با مدل‌های CLIP',
    ],
  },
];

interface CoursesSectionProps {
  onOpenConsultation: (courseTitle?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-right">
            <span className="text-xs font-semibold text-purple-400 tracking-wider">
              نقشه راه جامع تخصص هوش مصنوعی
            </span>
            <h2 className="text-3xl font-extrabold text-white">دوره‌های پیشرفته آکادمی</h2>
            <p className="text-slate-400 text-sm max-w-xl">
              مسیرهای یادگیری هدفمند برای متخصصان مهندسی داده، توسعه‌دهندگان نرم‌افزار و علاقه‌مندان به
              ورود عمیق به صنعت هوش مصنوعی
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 glass-card rounded-xl border border-slate-700/80 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              همه دوره‌ها
            </button>
            <button
              onClick={() => setSelectedCategory('llm')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'llm'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              مدل‌های زبانی & LLM
            </button>
            <button
              onClick={() => setSelectedCategory('agents')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'agents'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              عامل‌های هوشمند (Agents)
            </button>
            <button
              onClick={() => setSelectedCategory('deep')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'deep'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              یادگیری عمیق & PyTorch
            </button>
            <button
              onClick={() => setSelectedCategory('vision')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'vision'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              بینایی ماشین & Multimodal
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 text-right group"
            >
              <div>
                {/* Course Image Banner */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-80" />
                  
                  {/* Level & Duration overlays */}
                  <div className="absolute top-3 right-3 bg-[#070913]/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-cyan-300 border border-cyan-500/30 font-medium">
                    {course.level}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#070913]/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-purple-300 font-mono tabular-nums flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Clean unboxed tags with typographic separator */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                    {course.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < course.tags.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-[11px] text-slate-400 font-mono mb-3">
                    {course.englishTitle}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Course Footer & Actions */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">شهریه ثبت‌نام دوره</span>
                  <span className="text-lg font-extrabold text-cyan-400 font-mono tabular-nums">
                    {course.price}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="px-3.5 py-2 rounded-xl glass-card text-slate-300 hover:text-white hover:border-slate-600 text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>سرفصل کامل</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultation(course.title)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs hover:opacity-95 transition-all shadow-md glow-cyan-sm"
                  >
                    مشاوره و رزرو
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Course Detailed Syllabus Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl glow-cyan text-right">
            
            <button
              onClick={() => setActiveCourseModal(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="text-xs text-cyan-400 font-mono font-medium">{activeCourseModal.englishTitle}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{activeCourseModal.title}</h3>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 font-mono tabular-nums">
                <span>مدت: {activeCourseModal.duration}</span>
                <span>·</span>
                <span>سطح: {activeCourseModal.level}</span>
                <span>·</span>
                <span className="text-cyan-400 font-bold">{activeCourseModal.price}</span>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
              <div className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>پیش‌نیازهای ورود به دوره:</span>
              </div>
              <p className="text-xs text-slate-300">{activeCourseModal.prerequisites}</p>
            </div>

            {/* Syllabus Chapters */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>سرفصل‌های آموزشی این دوره (سرفصل استانداردهای بین‌المللی)</span>
              </h4>
              <ul className="space-y-2.5">
                {activeCourseModal.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 text-[11px] font-mono mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Projects */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-3">پروژه‌های عملیاتی پایان دوره:</h4>
              <div className="space-y-2">
                {activeCourseModal.projects.map((proj, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action inside modal */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="px-4 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                بستن پنجره
              </button>

              <button
                onClick={() => {
                  const courseTitle = activeCourseModal.title;
                  setActiveCourseModal(null);
                  onOpenConsultation(courseTitle);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs glow-cyan"
              >
                ثبت‌نام مشاوره‌ای برای این دوره
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
