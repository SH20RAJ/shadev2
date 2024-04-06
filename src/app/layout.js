import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";


export const metadata = {
  title: "Shade",
  description: "All in one social media app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        <Home/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
