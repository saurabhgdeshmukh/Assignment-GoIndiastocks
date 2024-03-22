'use client';
import '../styles/globals.css';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <html lang="en">
      <body className={`bg-white${inter.className}`}>
        <div className="flex">
        {isSideNavOpen && <SideNav />}
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <div className='flex items-center'>
          <button className='w-5 h-20 bg-blue-950 rounded-md text-gray-100' onClick={toggleSideNav}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475c13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path></svg></button>

              <PageWrapper>{children}</PageWrapper>
              </div>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
