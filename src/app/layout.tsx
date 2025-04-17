import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import ogImage from "@/app/assets/seo/or-image.webp";
import letterBlack from "@/app/assets/general/logo-letter-black.webp";
import letterWhite from "@/app/assets/general/logo-letter-white.webp";

const keywords = [
  "memorijalni profili",
  "uspomene",
  "biografije",
  "lokacije memorijala",
  "kreiranje profila",
  "deljenje uspomena",
  "fotografije",
  "video zapisi",
  "knjiga gostiju",
  "pretraga memorijala",
  "porodične veze",
  "očuvanje uspomena",
  "odavanje počasti",
  "sećanja",
  "voljeni",
  "biografija pretraga",
  "qr",
  "qrcode"
];

export const metadata: Metadata = {
  title: "Pomen - Platforma koja omogućava deljenje uspomena",
  description:
    "Naša platforma omogućava kreiranje memorijalnih profila, deljenje uspomena, postavljanje fotografija i pretragu biografija i lokacija memorijala.",
  keywords,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: letterBlack.src,
        href: letterBlack.src
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: letterWhite.src,
        href: letterWhite.src
      }
    ]
  },
  openGraph: {
    title: "Pomen - Platforma koja omogućava deljenje uspomena",
    description:
      "Naša platforma omogućava kreiranje memorijalnih profila, deljenje uspomena, postavljanje fotografija i pretragu biografija i lokacija memorijala.",
    url: "https://pomen.org",
    siteName: "Pomen",
    images: [
      {
        url: ogImage.src,
        width: 4096,
        height: 2734,
        alt: "Ruke koje nežno drže bele cvetove, simbolizujući sećanje i nežnost."
      }
    ],

    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false
  }
};

export default async function RootLayout({
  children
}: Readonly<React.PropsWithChildren>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <div className="hidden text-black text-white text-grey text-light-grey text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl font-thin font-light font-normal font-medium font-semibold font-bold font-extrabold font-black grid-cols-1 grid-cols-6 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-6 grid-cols-8 grid-cols-9 grid-cols-10" />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar
        />
      </body>
    </html>
  );
}
