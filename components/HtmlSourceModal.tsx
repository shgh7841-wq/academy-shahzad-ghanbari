'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2 } from 'lucide-react';

interface HtmlSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlSourceModal: React.FC<HtmlSourceModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    if (isOpen) {
      fetch('/standalone.html')
        .then((res) => res.text())
        .then((text) => {
          if (active) {
            setHtmlContent(text);
            setLoading(false);
          }
        })
        .catch(() => {
          if (active) {
            setHtmlContent('<!-- خطا در دریافت فایل standalone.html -->');
            setLoading(false);
          }
        });
    }
    return () => {
      active = false;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!htmlContent) return;
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    if (!htmlContent) return;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shahzad_ghanbari_academy.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-card border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl glow-cyan flex flex-col text-right">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">سورس‌کد فایل تکی HTML (Single Clean HTML)</h3>
              <p className="text-xs text-slate-400">
                شامل تمام ساختار HTML، استایل‌های Tailwind CDN، فونت Vazirmatn، آیکون‌های FontAwesome و کدهای تعاملی JS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action bar */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            نام فایل آماده: <span className="text-cyan-400 font-mono">shahzad_ghanbari_academy.html</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/standalone.html"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg glass-card hover:bg-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>پیش‌نمایش در تب جدید</span>
            </a>

            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>کپی کامل کد</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-xs font-semibold text-white flex items-center gap-1.5 shadow-md glow-cyan-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>دانلود مستقیم فایل HTML</span>
            </button>
          </div>
        </div>

        {/* Code View Body */}
        <div className="flex-1 overflow-hidden rounded-xl border border-slate-800 bg-[#05070f] p-4 text-left font-mono text-xs text-slate-300 dir-ltr select-all">
          {loading ? (
            <div className="h-64 flex items-center justify-center text-slate-500">
              در حال بارگذاری سورس‌کد...
            </div>
          ) : (
            <pre className="h-[52vh] overflow-y-auto whitespace-pre font-mono text-[11px] leading-relaxed">
              <code>{htmlContent}</code>
            </pre>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 text-right text-[11px] text-slate-500">
          نکته: این فایل به صورت ۱۰۰٪ خودکفا (Self-Contained) آماده شده و بدون نیاز به هیچ بیلدتول یا سروری با دوبار کلیک در مرورگر اجرا می‌شود.
        </div>

      </div>
    </div>
  );
};
