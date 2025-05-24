import "../globals.css";
import { smooch_Sans } from "../fonts";
import Nav from "../nav";

export const metadata = {
  title: "Portfolio - Alejandro Sánchez",
  description: "Portfolio - Alejandro Sánchez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${smooch_Sans.className} text-white antialiased`}
      >
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
      </body>
    </html>
  );
}