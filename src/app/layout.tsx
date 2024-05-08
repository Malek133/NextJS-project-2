import type { Metadata } from "next";
import { Inter, 
  // Noto_Kufi_Arabic
 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });
// const kufiarabic = Noto_Kufi_Arabic({subsets:['arabic'],weight:['300']})
export const metadata: Metadata = {
  title: 'Cloud Hosting',
  description: 'Cloud hosting project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <ToastContainer position="top-center" />
        <main>{children}</main>
        <Footer />
        </body>
        
    </html>
  );
}
