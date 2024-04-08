import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cookie,{getUser, user} from "./helpers/auth";


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
        <div className="flex">

        <Nav/>
        </div>
        <div className="flex flex-row border  shadow-xl  h-full ml-[89px]">
           {children}
        </div>

        {/* <div className="flex absolute">
        <Footer/>
        </div> */}

        </body>
    </html>
  );
}
