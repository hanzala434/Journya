import { Poppins } from "next/font/google";
import "./globals.css";
import SessionWraper from "./ui/SessionWraper";

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
