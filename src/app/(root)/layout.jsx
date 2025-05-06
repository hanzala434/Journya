import { Poppins } from "next/font/google";
import "@/app/globals.css";
import SessionWraper from "@/app/ui/SessionWraper";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the font weights you need
});

export const metadata = {
  title: "Journya",
  description: "Journy Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script>
      {`localStorage.theme = 'light'`}
      </Script>

      <body
        className={`${poppins.variable} antialiased`}
      >
               <SessionWraper>
               {children}
        </SessionWraper> 
               </body>
    </html>
  );
}
