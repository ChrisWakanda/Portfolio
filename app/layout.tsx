// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Aryan Raveshia | Portfolio",
//   description: "Software Engineer | Builder | Global Citizen",
//   icons: {
//     icon: "/airlogo1.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // --- Your existing metadata ---
  title: "Aryan Raveshia | Portfolio",
  description: "Software Engineer | Builder | Global Citizen",
  icons: {
    icon: "/airlogo1.png",
  },

  // --- Added properties for the social media preview ---
  openGraph: {
    title: "Aryan Raveshia | Portfolio",
    description: "Software Engineer | Builder | Global Citizen",
    url: "https://aryanraveshia.com",
    siteName: "Aryan Raveshia Portfolio",
    images: [
      {
        url: 'https://aryanraveshia.com/AIR_logo_social_media_preview.jpg', // ❗️ IMPORTANT: Replace this with your full image URL
        width: 1200,
        height: 630,
        alt: 'Aryan Raveshia Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Raveshia | Portfolio',
    description: 'Software Engineer | Builder | Global Citizen',
    images: ['https://aryanraveshia.com/AIR_logo_social_media_preview.jpg'], // ❗️ IMPORTANT: Replace this with your full image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}