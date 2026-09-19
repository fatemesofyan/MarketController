import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function DirectContact() {
  return (
    <div className="flex flex-col w-f gap-3">
      <div className="flex flex-row items-center justify-start gap-2">
        <FaMapMarkerAlt className="flex w-6.25 shrink-0 items-center justify-end" />

        <p className="text-text-secondary text-base leading-7">
          تهران، اشرفی اصفهانی
        </p>
      </div>

      <div className="flex flex-row items-center justify-start gap-2">
        <FaPhone className="flex w-6.25 shrink-0 items-center justify-end" />

        <a
          href="tel:0215531000"
          className="text-text-secondary text-base leading-7 hover:text-brand-primary hover:scale-105"
        >
          021-5531000
        </a>
      </div>

      <div className="flex flex-row items-center justify-start gap-2">
        <FaEnvelope className="flex w-6.25 shrink-0 items-center justify-end" />

        <a
          href="mailto:info@faraz.io"
          className="text-text-secondary text-base leading-7 hover:text-brand-primary hover:scale-105"
        >
          info@faraz.io
        </a>
      </div>
    </div>
  );
}
