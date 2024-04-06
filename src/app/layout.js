import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


export const metadata = {
  title: "Shade",
  description: "All in one social media app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
