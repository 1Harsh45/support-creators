import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SupportCreators | Empowering Creative Projects Through Funding",
  description: "SupportCreators helps creators launch and grow their ideas by connecting them with supporters through a reliable and transparent crowdfunding platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <div className="relative z-10 min-h-screen w-full bg-black text-white">
            <div className="z-10 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <Navbar />
              <div className="min-h-screen relative">{children}</div>
              <Footer />
            </div>
          </div>

        </SessionWrapper>
      </body>
    </html>
  );
}
