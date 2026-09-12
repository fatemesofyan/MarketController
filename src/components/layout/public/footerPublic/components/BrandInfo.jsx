import Logo from "../../../../branding/Logo";
import SocialLinks from "./SocialLinks";

export default function BrandInfo() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h2
          className="
          text-xl
          font-bold
          text-brand-primary
          mb-0
          "
        >
          قیمت یار
        </h2>
        <Logo />
      </div>

      <p
        className="
         text-text-secondary
         max-w-75
         text-base
         leading-7
         "
      >
        قیمت طلا و بازارهای مالی برای تصمیم‌گیری سریع‌تر و هوشمندانه‌تر
      </p>
      <SocialLinks />
    </div>
  );
}
