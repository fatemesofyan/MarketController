import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function TrustBadges() {
  return (
    <div className="flex flex-row justify-center gap-5 justify-between pt-2 pb-4 mr-20 ml-20 border-t border-border-default">
      <Image src="/images/enamadIcon.png" alt="Logo" width={80} height={80} />
      <Image
        src="/images/etehadiekeshvari.png"
        alt="Logo"
        width={80}
        height={80}
      />
    </div>
  );
}
