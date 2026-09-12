import React from "react";
import Copyright from "./components/Copyright";
import BrandInfo from "./components/BrandInfo";

export default function FooterPublic() {
  return (
    <div className="bg-surface-section">
      <BrandInfo />
      <Copyright />
    </div>
  );
}
