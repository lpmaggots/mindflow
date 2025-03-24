import type { Metadata } from "next";
import "@/styles/globals.scss";
// fonts
import { Geist, Geist_Mono } from "next/font/google";
// bootstrap
import BootstrapProvider from "@/providers/BootstrapProvider";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// components
import Navbar from "@/app/ui/navbar/Navbar";
import Footer from "@/app/ui/footer/Footer";
// Importamos o ClientProvider
import ClientProvider from "@/providers/ClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindflow",
  description: "O próximo passo para o seu futuro começa agora!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapProvider>
          <ClientProvider /> {/* Adicionamos o ClientProvider aqui */}
          <Navbar />
          {children}
          <Footer />
        </BootstrapProvider>
      </body>
    </html>
  );
}