import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica Lejeune | Portfolio",
  description: "Jessica Lejeune, développeur JavaScript fullstack junior.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#B5C9FF] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem] w-[31rem] rounded-full blur-[15rem] sm:w-[68rem]"></div>
        <div className="bg-[#C0FFDF] absolute top-[-1rem] -z-10 right-[-35rem] h-[31rem] w-[31rem] rounded-full blur-[15rem] sm:w-[68rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
