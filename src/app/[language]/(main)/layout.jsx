import "../../globals.css";
import { smooch_Sans } from "../../fonts";
import Nav from "../../nav";
import { ThemeProvider } from "../../theme-provider";

export const metadata = {
  title: "Portfolio",
  description: "Alejandro Sánchez",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 ease-in w-full antialiased overflow-x-hidden`}
      >
       <div
        className="w-full"
       >
          <ThemeProvider>
            <nav
              className="h-fit w-full"
            >
              <Nav />
            </nav>
            <main
              className="min-h-screen w-full"
            >
              {children}
            </main>
          </ThemeProvider>
       </div>
      </body>
    </html>
  );
}