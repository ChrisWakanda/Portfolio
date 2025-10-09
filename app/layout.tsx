


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  title: "Aryan Raveshia | Portfolio",
  description: "Software Engineer and Software Developer at Northeastern University specializing in distributed systems, machine learning, simulation, and full-stack development. Software Development Engineer previously at Boeing. Open for Summer 2026 internships.",
  keywords: ['Software Engineer', 'Software Developer', 'Software Development Engineer', 'Machine Learning', 'Simulation', 'Full Stack Developer', 'Northeastern University', 'Boston', 'Aryan Raveshia', 'Web Development', 'AI', 'React', 'Python', 'Distributed Systems', 'Boeing'],
  authors: [{ name: 'Aryan Raveshia' }],
  verification: { 
    google: '5TkZ-7hg9UYSGAVnEkV-UIMVIQYzSNdh-iAka-y_gxg',
  },
  icons: {
    icon: "/airlogo1.png",
  },
  openGraph: {
    title: "Aryan Raveshia | Portfolio",
    description: "Software Engineer and Software Developer specializing in distributed systems, machine learning, simulation, and full-stack development",
    url: "https://aryanraveshia.com",
    siteName: "Aryan Raveshia Portfolio",
    images: [
      {
        url: 'https://aryanraveshia.com/AIR_logo_social_media_preview.jpg',
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
    description: 'Software Engineer and Software Developer specializing in ML, simulation, and distributed systems',
    creator: '@aryan_raveshia',
    images: ['https://aryanraveshia.com/AIR_logo_social_media_preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aryan Raveshia',
    url: 'https://aryanraveshia.com',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Northeastern University'
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Northeastern University'
      },
      {
        '@type': 'Organization',
        name: 'Manipal Institute of Technology'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/in/aryanraveshia/',
      'https://github.com/ChrisWakanda',
      'https://x.com/aryan_raveshia'
    ],
    knowsAbout: ['Software Engineering', 'Full Stack Software Development', 'Software Development', 'Machine Learning', 'Web Development', 'Distributed Systems', 'Simulation', 'Python', 'React', 'Nodejs', 'ZeroMQ', 'Explainable AI'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US'
    }
  };

  return (
    <html lang="en">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}