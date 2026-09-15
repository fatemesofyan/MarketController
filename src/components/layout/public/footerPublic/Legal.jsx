import React from "react";

export default function Legal() {

    const linkClass =
    "text-sm text-text-muted transition-all duration-300 ease-out hover:text-brand-primary hover:scale-105 origin-right";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="
    relative
    pr-3
    text-sm font-semibold text-text-primary
    after:absolute
    after:right-0
    after:top-1/2
    after:h-4
    after:w-0.5
    after:-translate-y-1/2
    after:rounded-full
    after:bg-brand-primary
  ">
        قوانین و مقررات
      </h3>

      <nav className="flex flex-col gap-3">
        <a href="#" className={linkClass}>
          شرایط استفاده
        </a>

        <a href="#" className={linkClass}>
          حریم خصوصی
        </a>

        <a href="#" className={linkClass}>
           امنیت و داده‌ها
        </a>
       
      </nav>
    </div>
  );
}
