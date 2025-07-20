import "../../globals.css";
import { smooch_Sans } from "../../fonts";
import Nav from "../../nav";
import Head from "next/head";
import { ThemeProvider } from "../../theme-provider";

export const metadata = {
  title: "Portfolio",
  description: "Alejandro Sánchez",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${smooch_Sans.className}  dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 ease-in w-full antialiased`}
      >
        <ThemeProvider>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <nav
            className="h-fit w-full"
          >
            <Nav />
          </nav>
          <main
            className="min-h-screen"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}