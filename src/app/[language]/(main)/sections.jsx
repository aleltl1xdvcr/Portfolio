'use client'

import Projects from "../(projects-section)/projects"
import Image from "next/image"
import { useThemeStore } from "../../store-theme";

const skills = [
  {
    name: "JavaScript",
    img_dark: "/images/JS-icon.png",
    img_light: "/images/logo-js-black.png",
  },
  {
    name: "HTML",
    img_dark: "/images/html-logo.png",
    img_light: "/images/logo-html-black.png",
  },
  {
    name: "CSS",
    img_dark: "/images/logo-css.png",
    img_light: "/images/logo-css-blacky.png",
  },
  {
    name: "Tailwind",
    img_dark: "/images/tailwind-logo.PNG",
    img_light: "/images/logo-tailwind-black.png",
  },
  {
    name: "React",
    img_dark: "/images/icon-react.png",
    img_light: "/images/logo-react-black.png",
  },
  {
    name: "Zustand",
    img_dark: "/images/zustand-logo.PNG",
    img_light: "/images/zustand-logo.PNG",
  },
  {
    name: "NextJS",
    img_dark: "/images/nextjs-logo.png",
    img_light: "/images/logo-nextjs-black.png",
  },
  {
    name: "NodeJS",
    img_dark: "/images/nodejs-logo.png",
    img_light: "/images/logo-nodejs-black.png",
  },
  {
    name: "Strapi",
    img_dark: "/images/strapi.png",
    img_light: "/images/logo-strapi.black.png",
  },
  {
    name: "Algolia",
    img_dark: "/images/algolia-logo.png",
    img_light: "/images/logo-algolia-black.png",
  },
  {
    name: "Express",
    img_dark: "/images/express-logo.png",
    img_light: "/images/logo-express-black.png",
  },
  {
    name: "PostgreSQL",
    img_dark: "/images/postgres-logo.png",
    img_light: "/images/logo-postgres-black.png",
  },
  {
    name: "MongoDB",
    img_dark: "/images/mongodb-logo.png",
    img_light: "/images/logo-mongo-black.png",
  },
  {
    name: "Render",
    img_dark: "/images/render-logo.png",
    img_light: "/images/logo-render-black.png",
  },
  {
    name: "Git",
    img_dark: "/images/git-logo.png",
    img_light: "/images/logo-git-black.png",
  },
  {
    name: "Redis",
    img_dark: "/images/revert-logo-white-redis.png",
    img_light: "/images/redis-logo-white-removebg-preview.png",
  },
]

export function Skills() {
  const { theme } = useThemeStore();
  
  return (
    <div
      className="flex flex-col gap-5 w-full"
    >
      <div
        className="flex flex-wrap items-start w-full gap-5"
      >
        {
          skills.map((i, n) => (
            <div
              key={n}
              className="flex flex-col-reverse items-center hover:scale-110 transition-transform duration-800 group ease"
            >
              <h1
                className="text-[17.5px] italic group-hover:font-bold"
              >
                {i.name}
              </h1>
              <div
                className="relative w-[70px] h-[70px]"
              >
                <Image
                  src={
                    theme === 'light' ? i.img_light : theme === 'dark' ? i.img_dark : null
                  }
                  fill
                  alt={i.name}
                  
                />
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export function ProjectsPage({ data }) {
  return  <Projects data={data} />
}