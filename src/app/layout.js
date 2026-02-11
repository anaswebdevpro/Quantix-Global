import { Lato } from "next/font/google"; // Use next/font/google
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blockchain Development Company | Web 3.0 Solutions - Webcom Systems",
  description:
    "Dive into Web 3.0 with Webcom Systems! We build custom blockchain solutions to automate trust, streamline workflows, and unlock next-gen possibilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased font-sans text-[#333d47] bg-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
