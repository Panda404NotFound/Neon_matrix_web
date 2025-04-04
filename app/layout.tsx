import type { Metadata } from "next";
import "./globals.css";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: ".synth - Синтетическая дизайн-студия",
  description: "Студия дизайна .synth — создаем уникальные цифровые интерфейсы и брендинг",
  keywords: "UX/UI Design, Брендинг, Иллюстрация, Веб дизайн, Дизайн интерфейсов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <BackgroundEffect />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 