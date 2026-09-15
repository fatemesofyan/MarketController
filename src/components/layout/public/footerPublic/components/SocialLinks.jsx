import { FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  const iconClass = `
    w-10 h-10
    flex items-center justify-center
    rounded-full
    bg-border-subtle
    text-text-muted
    transition-all duration-300 ease-out
    hover:bg-brand-primary
    hover:text-text-inverse
    hover:scale-95
    hover:-translate-y-1
    cursor-pointer
  `;

  return (
    <div className=" flex flex-col pb-4">
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
        {" "}
        ما در شبکه های اجتماعی
      </h3>
      <div className="flex flex-row justify-center gap-3 mt-5">
        <a href="#" className={iconClass} aria-label="Telegram">
          <FaTelegram size={25} />
        </a>

        <a href="#" className={iconClass} aria-label="Instagram">
          <FaInstagram size={25} />
        </a>

        <a href="#" className={iconClass} aria-label="LinkedIn">
          <FaLinkedin size={25} />
        </a>

        <a href="#" className={iconClass} aria-label="GitHub">
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}
