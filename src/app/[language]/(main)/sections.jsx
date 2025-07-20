'use client'

import Projects from "../(projects-section)/projects"
import Image from "next/image"

const skills = [
  {
    name: "JavaScript",
    img: "/images/JS-icon.png",
  },
  {
    name: "HTML",
    img: "/images/html-logo.png",
  },
  {
    name: "CSS",
    img: "/images/logo-css.png",
  },
  {
    name: "Tailwind",
    img: "/images/tailwind-logo.PNG",
  },
  {
    name: "React",
    img: "/images/icon-react.png",
  },
  {
    name: "Zustand",
    img: "/images/zustand-logo.PNG",
  },
  {
    name: "NextJS",
    img: "/images/nextjs-logo.png",
  },
  {
    name: "NodeJS",
    img: "/images/nodejs-logo.png",
  },
  {
    name: "Strapi",
    img: "/images/strapi.png",
  },
  {
    name: "Algolia",
    img: "/images/algolia-logo.png",
  },
  {
    name: "Express",
    img: "/images/express-logo.png",
  },
  {
    name: "PostgreSQL",
    img: "/images/postgres-logo.png",
  },
  {
    name: "MongoDB",
    img: "/images/mongodb-logo.png",
  },
  {
    name: "Render",
    img: "/images/render-logo.png",
  },
  {
    name: "Git",
    img: "/images/git-logo.png",
  },
  {
    name: "Redis",
    img: "/images/revert-logo-white-redis.png",
  },
]

export function Skills() {
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
                  src={i.img}
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