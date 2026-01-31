import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from "@/provider/theme-provider";
import { Navbar } from "@/component/navbar";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["400","500","600","700"]

});

export const metadata: Metadata = {
  title: "Agencyforce marketing Template-Accentricity Ui pro",
  description: "Agenforce is a multipurpose marketing template build with Next.js Typescript tailwind Css and Mnotion for React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased `}>
        <ThemeProvider
         attribute= "class" 
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
          >
            <Navbar/>
          <main className="bg-background text-foreground min-h-screen">{children}</main>
        </ThemeProvider>
  
      </body>
    </html>
  );
}
