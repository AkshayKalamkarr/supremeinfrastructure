import { Kanit } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Navbar";

const kanit = Kanit({
  weight: '500',
  subsets: ["thai"],
  weight: ['500'],
  display: "swap"
});

export const metadata = {
  title: "Supreme Infrastructure",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        {/* <Header/> */}
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
