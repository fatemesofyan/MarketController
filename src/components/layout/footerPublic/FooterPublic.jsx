import Copyright from "./components/Copyright";
import BrandInfo from "./components/BrandInfo";
import CustomerSupport from "./components/CustomerSupport";
import AboutUs from "./components/AboutUs";
import Legal from "./components/Legal";
import AIResources from "./components/AIResources";
import TrustBadges from "./components/TrustBadges";
import SubscribeForm from "./components/SubscribeForm";

export default function FooterPublic() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-border-subtle
        bg-surface-section
        pt-12
      "
    >
      {/* =========================
          TOP LIGHT
      ========================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-l
          from-transparent
          via-brand-primary/60
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-0
          h-12
          w-2/3
          -translate-x-1/2
          bg-brand-primary/5
          blur-3xl
        "
      />

      {/* =========================
          BACKGROUND GRID
      ========================== */}

      {/* Background Grid */}
      <div
        className="
    absolute
    inset-0

    bg-[linear-gradient(to_left,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)]

    bg-size-[58px_58px]

    mask-[radial-gradient(ellipse_at_center,black_18%,transparent_82%)]

    [--grid-line:rgba(99,102,241,0.04)]
  "
      />

      {/* =========================
          RIGHT BRAND GLOW
      ========================== */}

      <div
        className="
    absolute
    inset-0

    bg-[linear-gradient(to_left,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)]

    bg-size-[58px_58px]

    mask-[radial-gradient(ellipse_at_center,black_25%,transparent_88%)]

    [--grid-line:rgba(89,92,221,0.055)]
  "
      />

      {/* =========================
          LEFT AI GLOW
      ========================== */}

      <div
        className="
          absolute
          -bottom-52
          -left-36
          h-105
          w-105
          rounded-full
          bg-brand-primary/2
          blur-[130px]
        "
      />

      {/* =========================
          CENTER ANALYSIS GLOW
      ========================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-65
          w-150
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-primary/2
          blur-[120px]
        "
      />

      {/* =========================
          SUBTLE LIGHT SWEEP
      ========================== */}

      <div
        className="
          absolute
          -top-32
          left-1/2
          h-75
          w-225
          -translate-x-1/2
          rotate-[-8deg]
          bg-linear-to-r
          from-transparent
          via-brand-primary/4
          to-transparent
          blur-3xl
        "
      />

      {/* =========================
          FOOTER CONTENT
      ========================== */}

      <div className="relative z-10">
        <div
          className="
            mx-auto
            flex
            max-w-360
            flex-col
            items-center
            gap-10
            px-5
            pb-10

            sm:px-8

            md:gap-12

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-8
            lg:px-10
          "
        >
          <BrandInfo />

          <div
            className="
              grid
              w-full
              grid-cols-2
              items-start
              justify-items-center
              gap-x-6
              gap-y-10

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
      </div>
    </footer>
  );
}
