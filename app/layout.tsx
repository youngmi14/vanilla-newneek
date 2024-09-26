import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/reset.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const myFont = localFont({
  src: '../public/fonts/Pretendard.woff2'
});

export const metadata: Metadata = {
  title: "뉴닉-쉽고 재미있는 클론뉴닉",
  description: "뉴닉 클론코딩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={myFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
