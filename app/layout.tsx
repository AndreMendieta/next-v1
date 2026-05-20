import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ética Digital",
  description: "Proyecto sobre ética digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body>

        {/* NAVBAR */}

        <header className="navbar">

          <div className="logo">
            ÉTICA DIGITAL
          </div>

          {/* MENU */}

          <input type="checkbox" id="menu-toggle" />

          <label htmlFor="menu-toggle" className="hamburger">
            ☰
          </label>

          <nav className="nav-links">

            <Link href="/">
              Inicio
            </Link>

            <Link href="/uno">
              Banner Informativo
            </Link>

            <Link href="/dos">
              Juego
            </Link>

          </nav>

        </header>


        {/* CONTENIDO */}

        <main className="main-content">
          {children}
        </main>

      </body>

    </html>
  );
}