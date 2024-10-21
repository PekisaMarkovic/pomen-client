import * as React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const monBlack = localFont({
  src: "./fonts/Montserrat-Black.ttf",
  variable: "--font-mons-black",
  weight: "900",
});

const monExtraBold = localFont({
  src: "./fonts/Montserrat-ExtraBold.ttf",
  variable: "--font-mons-extra-bold",
  weight: "800",
});

const monBold = localFont({
  src: "./fonts/Montserrat-Bold.ttf",
  variable: "--font-mons-bold",
  weight: "700",
});

const monSemiBold = localFont({
  src: "./fonts/Montserrat-SemiBold.ttf",
  variable: "--font-mons-semi-bold",
  weight: "600",
});

const monMedium = localFont({
  src: "./fonts/Montserrat-Medium.ttf",
  variable: "--font-mons-medium",
  weight: "500",
});

const monRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-mons-regular",
  weight: "400",
});

const monLight = localFont({
  src: "./fonts/Montserrat-Light.ttf",
  variable: "--font-mons-light",
  weight: "300",
});

const monExtraLight = localFont({
  src: "./fonts/Montserrat-ExtraLight.ttf",
  variable: "--font-mons-extra-light",
  weight: "200",
});

const monThin = localFont({
  src: "./fonts/Montserrat-Thin.ttf",
  variable: "--font-mons-thin",
  weight: "100",
});

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
  "qrcode",
];

export const metadata: Metadata = {
  title: "Pomen",
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
        url: "https://pomen.org/og-image.webp",
        width: 4096,
        height: 2734,
        alt: "Ruke koje nežno drže bele cvetove, simbolizujući sećanje i nežnost.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${monBlack.variable} ${monBold.variable} ${monExtraBold.variable} ${monSemiBold.variable} ${monRegular.variable} ${monMedium.variable} ${monLight.variable} ${monExtraLight.variable} ${monThin.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
