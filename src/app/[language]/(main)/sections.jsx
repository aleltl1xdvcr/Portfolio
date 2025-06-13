'use client'

import { Mail, MapPin } from "feather-icons-react"
import Projects from "../(projects-section)/projects"
import { contact } from "../../data"
import { useLanguageStore } from "../../store"
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
]

export function Skills() {
  return (
    <div
      className="flex flex-col gap-5 w-full"
    >
      <div
        className="flex flex-wrap items-start translate-x-[-15px]¿ gap-5"
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

export function Contact() {  
  return (
    <div
      className="flex flex-col gap-5 w-full"
    >
      <Info
      
      />
      <div
        className="w-full p-5 border-white/30 border rounded-[3px] hidden">
        <form
          className="flex flex-col gap-5 w-full"
          action="">
          <div
            className="w-full gap-1 flex flex-col"
          >
            <div>
              <h1>Name</h1>
            </div>
            <input
              className="border border-white/10 h-10 bg-zinc-800/60 rounded-[3px] p-2 w-full"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div
            className="w-full gap-1 flex flex-col"
          >
            <div>
              <h1>Your mail direction</h1>
            </div>
            <input
              className="border border-white/10 h-10 bg-zinc-900 rounded-[3px] p-2 w-full"
              type="text"
              placeholder="Your email..."
            />
          </div>
          <div
            className="w-full gap-1 flex flex-col"
          >
            <div>
              <h1>Your Message</h1>
            </div>
            <textarea
              className="border border-white/10 bg-zinc-900 text-white opacity-100 w-full h-[400px] rounded-[3px] p-2"
              placeholder="Your message"
            />
          </div>
          <input
            readOnly
            value='Send Message'
            className="w-fit px-2 h-14 bg-white text-black text-center text-[18px] rounded-[3px] hover:bg-white/70 cursor-pointer transition-colors duration-300 ease-in"            
            />
        </form>

      </div>
    </div>
  )
}

function Info() {
  const language = useLanguageStore((state) => state.language)
  
  return(
    <div
      className="w-full"
    >
      <div
        className="my-2.5 text-[20px] font-bold"
      >
        <h1
          className="text-[18px]"
        >
          {Object.keys(contact.find(i => i.language === language))[1]}
        </h1>
      </div>
      <div
        className="flex flex-row  gap-10"
      >
       
        <div
          className="flex flex-row items-center gap-5"
        >
          <Mail />

          <div
            className="flex flex-col items-start"
          >
            <h1
              className="font-bold"
            >
              {Object.keys(contact.find(i => i.language === language).content)[0]}
            </h1>
            <div>
              {Object.values(contact.find(i => i.language === language).content)[0]}
            </div>
          </div>
          
        </div>
        <div
          className="flex flex-row items-center gap-5"
        >
          <MapPin />
          <div
            className="flex flex-col items-start"
          >
            <h1
              className="font-bold"
            >
              {Object.keys(contact.find(i => i.language === language).content)[1]}
              </h1>
            <div>
              {Object.values(contact.find(i => i.language === language).content)[1]}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export function ProjectsPage({ data }) {
  return  <Projects data={data} />
}