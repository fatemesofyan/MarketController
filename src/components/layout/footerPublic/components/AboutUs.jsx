
export default function AboutUs() {
  const linkClass =
    "text-sm text-text-muted transition-all duration-300 ease-out hover:text-brand-primary hover:scale-105 origin-right";

  return (
    <div className="flex flex-col gap-4">
   <h3
  className="
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
  "
>
  درباره ما
</h3>
      <nav className="flex flex-col gap-3">
        <a href="#" className={linkClass}>
          درباره ما
        </a>

        <a href="#" className={linkClass}>
 تماس با ما
        </a>

      
        <a href="#" className={linkClass}>
          ویژگی ها
        </a>

        <a href="#" className={linkClass}>
منابع داده   
        </a>
      </nav>
    </div>
  );  
}

