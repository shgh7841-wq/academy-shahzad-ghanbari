import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'آکادمی هوش مصنوعی شهزاد قنبری | Shahzad Ghanbari AI Academy',
  description: 'پلتفرم پیشرفته آموزش تخصصی هوش مصنوعی، یادگیری عمیق، مدل‌های زبانی و مهندسی پرامپت با تدریس شهزاد قنبری',
  openGraph: {
    title: 'آکادمی هوش مصنوعی شهزاد قنبری | Shahzad Ghanbari AI Academy',
    description: 'پلتفرم پیشرفته آموزش تخصصی هوش مصنوعی، یادگیری عمیق، مدل‌های زبانی و مهندسی پرامپت با تدریس شهزاد قنبری',
    type: 'website',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آکادمی هوش مصنوعی شهزاد قنبری | Shahzad Ghanbari AI Academy',
    description: 'پلتفرم پیشرفته آموزش تخصصی هوش مصنوعی، یادگیری عمیق، مدل‌های زبانی و مهندسی پرامپت با تدریس شهزاد قنبری',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className="min-h-screen bg-[#070913] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
