import Logo from "../../../../branding/Logo";
import DirectContact from "./DirectContact";

export default function BrandInfo() {
  return (
 <div className="flex flex-col min-[700px]:max-lg:self-start">
  <div className="flex w-full items-center justify-end gap-2 pb-2.5 " dir="ltr">
    <h2 className="text-xl font-bold text-brand-primary mb-0">
      قیمت یار
    </h2>
    <Logo />
  </div>

  <p className="text-text-secondary max-w-80 text-base leading-7 pb-3">
    تحلیل بازارهای مالی برای تصمیم‌گیری هوشمندانه‌تر
  </p>

  <DirectContact />
</div>
  );
}
