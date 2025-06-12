'use client'

import { Mail, MapPin } from "feather-icons-react"
import Projects from "../(projects-section)/projects"

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
  return(
    <div
      className="w-full"
    >
      <div
        className="my-5"
      >
      
        <p>
          Interested in working together, want to submit an article to the blog or have a question? Drop me a message and ill be in touch in due course.

          John Richardson Development offers web development services, primarily serving the North East region, including Newcastle, Sunderland, Middlesbrough & County Durham.
        </p>
      </div>
      <div
        className="my-2.5 text-[20px] font-bold"
      >
        <h1
          className="text-[18px]"
        >
          Información de Contacto
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
              Correo electrónico
            </h1>
            <div>
              gentsie1@gmail.com
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
              Ubicación
            </h1>
            <div>
              México
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