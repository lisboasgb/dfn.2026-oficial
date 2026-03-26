import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tutor DFN | Aprenda Inglês Falando Desde o Primeiro Dia",
  description:
    "Pratique inglês de verdade com o único Tutor de IA que não te deixa travado. Corrigindo e ensinando em tempo real, direto no WhatsApp.",
  icons: {
    icon: "/dfn.tutorjs/fivecon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased relative`}
      >
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
