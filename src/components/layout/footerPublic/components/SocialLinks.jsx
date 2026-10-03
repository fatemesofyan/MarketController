import {
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function SocialLinks() {
  const iconClass = `
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-xl

    border
    border-border-default

    bg-surface-card
    text-text-muted

    transition-all
    duration-200
    ease-out

    hover:-translate-y-1
    hover:border-brand-primary
    hover:bg-brand-primary
    hover:text-text-inverse

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-primary/20
  `;

  return (
    <div className="flex flex-col pb-4">
      <h3
        className="
          relative
          pr-3
          text-sm
          font-semibold
          text-text-secondary
          after:absolute
          after:right-0
          after:top-1/2
          after:h-4
          after:w-0.5
          after:-translate-y-1/2
          after:rounded-full
          after:bg-brand-primary
        "
      >
        ما در شبکه‌های اجتماعی
      </h3>

      <div className="mt-5 flex flex-row gap-3">
        <a
          href="#"
          className={iconClass}
          aria-label="Telegram"
        >
          <FaTelegram size={20} />
        </a>

        <a
          href="#"
          className={iconClass}
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="#"
          className={iconClass}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="#"
          className={iconClass}
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
}