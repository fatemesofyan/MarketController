import React from "react";
import Copyright from "./components/Copyright";
import BrandInfo from "./components/BrandInfo";
import CustomerSupport from "./components/CustomerSupport";
import AboutUs from "./components/AboutUs";
import Legal from "./Legal";
import AIResources from "./components/AIResources";
import TrustBadges from "./components/TrustBadges";
import SubscribeForm from "./components/SubscribeForm";

export default function FooterPublic() {
  return (
    <footer className="bg-surface-section pt-10">
      <div
        className="
          flex flex-col items-center gap-8
          px-5 pb-8
          sm:px-8
          md:gap-10
          lg:flex-row lg:items-start
          lg:justify-between lg:gap-8 lg:px-10
        "
      >
        <BrandInfo />

       <div
  className="
    grid w-full grid-cols-2
    items-start justify-items-center
    gap-x-6 gap-y-8
    min-[700px]:grid-cols-4
    min-[700px]:gap-x-8
    lg:contents
    *:min-w-0
  "
>
  <AboutUs />
  <CustomerSupport />
  <Legal />
  <AIResources />
</div>

        <SubscribeForm />
      </div>

      <TrustBadges />
      <Copyright />
    </footer>
  );
}