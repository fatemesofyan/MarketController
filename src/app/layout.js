import "./globals.css";
import HeaderPublic from "../components/layout/headerPublic/headerPublic";
import FooterPublic from "../components/layout/footerPublic/FooterPublic";

export const metadata = {
  title: "کنترل مارکت",
  description: "پایش و تحلیل بازارهای مالی برای تصمیم‌گیری هوشمندانه‌تر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <HeaderPublic />

        <main className="flex-1">{children}</main>

        <FooterPublic />
      </body>
    </html>
  );
}
