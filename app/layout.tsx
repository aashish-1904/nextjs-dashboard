import "@/app/ui/global.css";
import { press2P } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${press2P.className} antialiased`}>{children}</body>
    </html>
  );
}
