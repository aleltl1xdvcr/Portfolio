import "../../../../globals.css";
import { smooch_Sans } from "../../../../fonts";
import NavProjects from "../nav-projects";
import ThemeProvider from '../../../../theme-provider'

export const metadata = {
  title: "Project",
  description: "Alejandro Sánchez",
  
};

export default async function Layout({ children }) {
  return (
   
      <html
        lang="es"
      >
      <body
        className={`${smooch_Sans.className} relative dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 ease-in w-full antialiased`}
      >
        <ThemeProvider>
          <div>
            <nav
              className="h-fit w-full"
            >
              <NavProjects />
            </nav>
            <div
              className="min-h-screen w-full"
            >
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
      </html>

  );
}