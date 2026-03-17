import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Iandra Rocha | Advocacia & Consultoria Jurídica',
  description: 'Advocacia ética, contemporânea e comprometida com pessoas e suas histórias.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F3F1ED] text-[#1E1E1E] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
