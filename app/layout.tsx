import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { lusitana } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialised`}>{children}</body>
    </html>
  );
}
