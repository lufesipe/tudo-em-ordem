import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tudo Em Ordem",
  description: "Sua vida toda em um só lugar.",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
