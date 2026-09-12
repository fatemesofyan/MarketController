import React from "react";

export default function ContactInfo() {
  const linkClass =
    "text-sm text-text-muted transition-all duration-300 ease-out hover:text-brand-primary hover:scale-105 origin-right";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-text-primary">
        منابع
      </h3>

      <nav className="flex flex-col gap-3">
        <a href="#" className={linkClass}>
          راهنما
        </a>

        <a href="#" className={linkClass}>
          سوالات متداول
        </a>

        <a href="#" className={linkClass}>
          مستندات API
        </a>

        <a href="#" className={linkClass}>
          وبلاگ
        </a>

        <a href="#" className={linkClass}>
          آموزش‌ها
        </a>

        <a href="#" className={linkClass}>
          پشتیبانی
        </a>
      </nav>
    </div>
  );
}

