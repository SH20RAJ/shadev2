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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body >
        <Nav/>
        <Home/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
