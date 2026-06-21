import "./globals.css"; 
import HeaderPublic from "../components/layout/public/headerPublic/headerPublic";
import FooterPublic from "../components/layout/public/footerPublic/FooterPublic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <HeaderPublic />
        {children}
        <FooterPublic />
      </body>
    </html>
  );
}