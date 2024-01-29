import Head from 'next/head';
import '../styles/global.scss';
import { Metadata } from 'next';
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export const metadata: Metadata = {
  title: "DevRoom - Do papel à prática",
};

export default function RootLayout({ children, params }: RootLayoutProps) {

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

