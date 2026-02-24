import { Lato } from "next/font/google"; // Use next/font/google
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Sections/Footer";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blockchain Development Company | Web 3.0 Solutions - Avner Global",
  description:
    "Dive into Web 3.0 with Avner Global! We build custom blockchain solutions to automate trust, streamline workflows, and unlock next-gen possibilities.",
  icons: {
    icon: "/assets/image/favicon.png",
    apple: "/assets/image/favicon.png",
  },
  openGraph: {
    title: "Blockchain Development Company | Web 3.0 Solutions - Avner Global",
    description:
      "Dive into Web 3.0 with Avner Global! We build custom blockchain solutions to automate trust, streamline workflows, and unlock next-gen possibilities.",
    images: [
      {
        url: "/assets/image/favicon.png",
        width: 512,
        height: 512,
        alt: "Avner Global Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Development Company | Web 3.0 Solutions - Avner Global",
    description:
      "Dive into Web 3.0 with Avner Global! We build custom blockchain solutions to automate trust, streamline workflows, and unlock next-gen possibilities.",
    images: ["/assets/image/favicon.png"],
  },
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
