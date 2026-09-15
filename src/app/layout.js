import "./globals.css"; 
import HeaderPublic from "../components/layout/public/headerPublic/headerPublic";
import FooterPublic from "../components/layout/public/footerPublic/FooterPublic";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-full flex flex-col">
        <HeaderPublic />
        {children}
        <FooterPublic />
      </body>
    </html>
  );
}