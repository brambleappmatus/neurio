import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar';
import { AudioPlayer } from '@/components/AudioPlayer';
import { ScrollProgress } from '@/components/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neurio - AI Audio Services',
  description: 'Professional AI-powered audio solutions for IVR, commercials, and branding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111111]">
            <Navbar />
            <ScrollProgress />
            {children}
            <AudioPlayer />
          </div>
        </Providers>
      </body>
    </html>
  );
}