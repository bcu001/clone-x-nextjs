import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import LeftBar from '@/components/LeftBar';
import RightBar from '@/components/RightBar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'X Clone',
  description: 'X clone made by bcu001',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable
      )}
    >
      <body className="">
        <div className="flex justify-between mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="w-17 sm:w-22 xxl:w-68.75 px-1 sm:px-2">
            <LeftBar />
          </div>
          <div className="w-full flex-1 md:w-149.75 border-x border-gray-100">
            {children}{' '}
          </div>
          <div className="hidden ml-4 xl:ml-8 lg:block lg:w-72.25 xl:w-87.25 ">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
