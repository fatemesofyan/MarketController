
export default function AIResources() {
  const linkClass =
    "text-sm text-text-muted transition-all duration-300 ease-out hover:text-brand-primary hover:scale-105 origin-right";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="
    relative
    pr-3
    text-sm font-semibold text-text-secondary
    after:absolute
    after:right-0
    after:top-1/2
    after:h-4
    after:w-0.5
    after:-translate-y-1/2
    after:bg-brand-primary
  ">هوش مصنوعی </h3>

      <nav className="flex flex-col gap-3">
        <a href="#" className={linkClass}>
          مستندات AI
        </a>

        <a href="#" className={linkClass}>
         قابلیت‌های هوشمند
        </a>

        <a href="#" className={linkClass}>
          راهنمای استفاده از AI
        </a>
      </nav>
    </div>
  );
}
