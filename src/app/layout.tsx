import "../styles/global.css";
import { cn } from "@/lib/utils";

// import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";

import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  // authModal: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    // prettier-ignore
    <html lang="en" className={cn("bg-white text-slate-900 antialiased light", inter.className)} >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        {/* <Providers> */}
        <Navbar />
          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
        {/* </Providers> */}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
