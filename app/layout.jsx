import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Job Board",
  description: "Job Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${raleway.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
