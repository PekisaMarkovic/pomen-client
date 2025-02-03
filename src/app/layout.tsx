import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ogImage from "@/app/assets/seo/or-image.webp";

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
  title:
    "Pomen - Platforma koja omogućava kreiranje memorijalnih profila, deljenje uspomena",
  description:
    "Naša platforma omogućava kreiranje memorijalnih profila, deljenje uspomena, postavljanje fotografija i pretragu biografija i lokacija memorijala.",
  keywords,
  openGraph: {
    title: "Pomen",
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
