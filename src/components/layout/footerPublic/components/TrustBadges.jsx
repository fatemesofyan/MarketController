import Image from "next/image";

export default function TrustBadges() {
  const badgeClass = `
    flex
    h-24
    w-24
    items-center
    justify-center
    rounded-xl
    border
    border-border-default
    bg-surface-card
    p-2
    shadow-sm
    transition-all
    duration-200
    hover:-translate-y-1
    hover:border-brand-primary/40
    hover:shadow-md
  `;

  return (
 <div
    className="
      relative
      flex
      items-center
      justify-center
      gap-4
      mr-20
      ml-20
      pt-14
      pb-8

      before:absolute
      before:top-5
      before:left-0
      before:right-0
      before:border-t
      before:border-border-default
    "
  >
      <div className={badgeClass}>
        <Image
          src="/images/enamadIcon.png"
          alt="نماد اعتماد الکترونیکی"
          width={72}
          height={72}
          className="h-full w-full object-contain"
        />
      </div>

      <div className={badgeClass}>
        <Image
          src="/images/etehadiekeshvari.png"
          alt="نماد اتحادیه کشوری"
          width={72}
          height={72}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}