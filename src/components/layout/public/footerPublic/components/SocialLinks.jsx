import {
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

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
    <div className="flex gap-3 mt-5">
      <a href="#" className={iconClass} aria-label="Telegram">
        <FaTelegram size={20} />
      </a>

      <a href="#" className={iconClass} aria-label="Instagram">
        <FaInstagram size={20} />
      </a>

      <a href="#" className={iconClass} aria-label="LinkedIn">
        <FaLinkedin size={20} />
      </a>

      <a href="#" className={iconClass} aria-label="GitHub">
        <FaGithub size={20} />
      </a>
    </div>
  );
}