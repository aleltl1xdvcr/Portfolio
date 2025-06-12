import "../../../../globals.css";
import { smooch_Sans } from "../../../../fonts";
import NavProjects from "../nav-projects";

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
        className={`${smooch_Sans.className} text-white antialiased`}
      >

        <div>
          <nav
            className="h-fit w-full"
          >
            <NavProjects />
          </nav>
          <div
            className="min-h-screen"
          >
            {children}
          </div>
        </div>
      </body>
      </html>

  );
}