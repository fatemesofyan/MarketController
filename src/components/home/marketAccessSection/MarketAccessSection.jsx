import Image from "next/image";
import Button from "../../ui/Button/button";

export default function MarketAccessSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-16 sm:px-6 lg:px-8">
        <div
          className="
            flex
            flex-col
            items-center
            gap-8

            min-[700px]:flex-row
            min-[700px]:justify-between
            min-[700px]:gap-12

            lg:gap-20
          "
        >
          {/* Content */}
          <div
            className="
              contents

              min-[700px]:block
              min-[700px]:w-1/2
              min-[700px]:text-right
            "
          >
            {/* Text */}
            <div
              className="
                order-1
                w-full
                text-center

                min-[700px]:text-right
              "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                  leading-relaxed
                  text-text-primary

                  sm:text-3xl
                  lg:text-4xl
                "
              >
                بازارهای مالی ایران و جهان
                <span className="text-brand-primary"> در یک پلتفرم</span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  text-base
                  leading-8
                  text-text-secondary

                  min-[700px]:mx-0
                  lg:text-lg
                "
              >
                دسترسی سریع به بازارهای مالی، نمودارها و ابزارهای تحلیلی برای
                بررسی بهتر وضعیت بازار و تصمیم‌گیری هوشمندانه‌تر.
              </p>
            </div>

            {/* Actions */}
            <div
              className="
                order-3
                flex
                flex-row
                items-center
                justify-center
                gap-4

                min-[700px]:mt-6
                min-[700px]:justify-start
              "
            >
              <Button
                variant="primary"
                shape="rounded"
                type="button"
                className="min-w-36 px-10 py-3"
              >
                ثبت نام
              </Button>

              <Button
                variant="outline"
                shape="rounded"
                type="button"
                className="min-w-36 px-10 py-3"
              >
                ورود
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="
              order-2
              flex
              w-full
              items-center
              justify-center

              min-[400px]:w-1/2
            "
          >
            <Image
              src="/images/marketGrowth.png"
              alt="بازارهای مالی ایران و جهان"
              width={320}
              height={220}
              className="
                h-auto
                w-full
                max-w-sm
                object-contain
                sm:max-w-md
                min-[400px]:max-w-md
               lg:max-w-xs
               xl:max-w-sm
              "
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}
