import React from "react";
import Copyright from "./components/Copyright";
import BrandInfo from "./components/BrandInfo";
import ContactInfo from "./components/ContactInfo";

export default function FooterPublic() {
  return (
    <div className="bg-surface-section">
      <div className="flex flex-row-reverse gap-10">
      <BrandInfo />
      <ContactInfo/>
      </div>
      <Copyright />
    </div>
  );
}
