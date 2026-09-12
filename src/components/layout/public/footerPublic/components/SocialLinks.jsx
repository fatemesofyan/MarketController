import { FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-3 mt-5">
      <a
        className="hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <FaTelegram className="text-blue-500 po" size={25} />
      </a>

      <a
        className="hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <FaInstagram className="text-red-400" size={25} />
      </a>

      <a className="hover:scale-110 transition-transform duration-300 cursor-pointer">
        <FaLinkedin className="text-blue-500" size={25} />
      </a>

      <a className="hover:scale-110 transition-transform duration-300 cursor-pointer">
        <FaGithub className="text-gray-700" size={25} />
      </a>
    </div>
  );
}
