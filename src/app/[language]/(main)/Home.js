'use client'

import ImgTor from "../../utils/img-tor"
import { useEffect, useRef, useState } from "react"
import { useLanguageStore } from "../../store"
import { useHydration } from "../../useHydrated"
import { ArrowUp, ExternalLink, ChevronLeft, ChevronRight, Info, X } from "feather-icons-react"
import '../styles.css'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core'
import Image from "next/image"
import { home, projects, profile, contact } from '../../data'
import {Contact, ProjectsPage, Skills, } from "./sections"

export const dynamic = 'force-dynamic';

export default function Home({ data }) {
  const cinema = useLanguageStore((state) => state.cinema)
  const setCinema = useLanguageStore((state) => state.setCinema)
  const lenisRef = useLanguageStore((state) => state.lenis)
  const modal_cinema = useState(typeof document !== 'undefined' && document.getElementById('modal_cinema__'))
  const splideRef = useRef(null)
  const language = useLanguageStore((state) => state.language)
  const [isClient, setIsClient] = useState(false)
  const [titleSt, setTitleSt] = useState(null)
  const hasHydrated = useHydration(useLanguageStore)

  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  function title() {
    return (
      <h1
        className="text-[18px] leading-tight "
        key={`${titleSt}_${language}`}
      >
        {Object.keys(cinema.find(i => i.lang === language).content[titleSt || 0] || '')[0] || ''}
      </h1>)
  }

  function RenderSection({ name_section, language }) {
    switch (name_section) {
      case 'home':
        return home
          .filter((item) => item.language === language)
          .map((item, index) => (
            <div
              key={`${item.content?.title || 'home'}_${index}`}
              className="flex flex-col"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.content?.title }}
                className="text-[29px]"
              />
              <br />
              <div>
                <p>{item.content?.description}</p>
              </div>
            </div>
          ))

      case 'about':
        return profile
          .filter((item) => item.language === language)
          .map((item, index) => (
            <div
              key={`${item.content?.title || 'about'}_${index}`}
              className="flex flex-col"
            >
              <div>
                <p>{item.content?.description}</p>
              </div>
            </div>
          ))

      case 'contact':
        return contact
          .filter((item) => item.language === language)
          .map((item, index) => (
            <div
              key={`contact_${index}`}
              className="flex flex-col gap-y-5 items-start w-full"
            >
              <Contact /> 
            </div>
          ))

      case 'skills':
        return <Skills />
      default:
        return null
    }
  }

  useEffect(() => setIsClient(true), [])

  function fnCinema(id) {
    console.log('fncinema')
    console.log('VALUE', Object.keys(cinema.find(i => i.lang === language).content.find(b => Object.keys(b)[0] === id) || [])[0] || null)
    setCinema(Object.keys(cinema.find(i => i.lang === language).content.find(b => Object.keys(b)[0] === id) || [])[0] || null)
  }

  function fnThumbnail() {
      var thumbnails = document.getElementsByClassName('thumbnail')
      thumbnails[0].classList.add('is-active')
      var current

      for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i)
      }

      function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function () {
          splideRef.current?.go(index)
        })
      }
  }

  var currentfnOnMovedSlider

  function fnOnMovedSlider(splide) {
    setTitleSt(splide.index)
    var thumbnails = document.getElementsByClassName('thumbnail')
    thumbnails[0].classList.remove('is-active')
    var thumbnail = thumbnails[splide.index]

      if (thumbnail) {
        if (currentfnOnMovedSlider) {
          currentfnOnMovedSlider.classList.remove('is-active')
        }

        thumbnail.classList.add('is-active')
        currentfnOnMovedSlider = thumbnail
      }
  }

  function fnSplideMounted() {
    fnThumbnail()
  }

  function fnSplideMove(splide) {
    fnOnMovedSlider(splide)
  }

  useEffect(() => {
    if (!lenisRef) return
    if (document.getElementById('modal_cinema__')) {
      lenisRef.current.stop()
      document.documentElement.classList.add('overflow-hidden')
    } else if (!(document.getElementById('modal_cinema__'))) {
      lenisRef.current.start()
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [modal_cinema])

  if (!isClient) return
  if (!hasHydrated) return

  return (
    <div className="mt-[100px]">
      <main
        className="flex justify-center items-center w-full">
        <div
          className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] relative"
        >
          <div
            id="#home"
          >
            <RenderSection key={`HOME_${language}`} name_section='home' language={language} />
          </div>

          <br />

          <div
            id="#skills"
            label="Sección 2"
          >
            <RenderSection key={`SKILLS_${language}`} name_section='skills' language={language} />
          </div>

          <br />
          
          <div
            id="#projects"
            label="Sección 3"
          >
            <ProjectsPage
              data={data}
            />
          </div>
          
          <div
            className="flex flex-col gap-y-5 mt-5"
          >
            <RenderSection key={`PROJECTS_${language}`} name_section='projects' language={language} />
          </div>

          <br />
          <h1
            id="#about"
            label="Sección 3"
            className="text-[30px] italic hidden"
          >
            {
              language === 'es' ? 'Sobre mí' : language === 'en' ? 'About' : null
            }
          </h1>

          <RenderSection key={`ABOUT_${language}`} name_section='about' language={language} />

          <br />
          <h1
            id="#contact"
            label="Sección 4"
            className="text-[30px] w-full "  
          >
            {Object.keys(contact.find(i => i.language === language) || '')[2]}
          </h1>

          <RenderSection key={`CONTACT_${language}`} name_section='contact' language={language} />

          <br />
          <h1
            id="#section5"
            label="Sección 5"
            className="text-[30px] hidden"
          >

          </h1>
        </div>
      </main>

      <div
        id="button_to_top"
        onClick={() => toTop()}
        className={`circular-hover fixed z-20 bottom-[50px] right-[50px] hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer`}
      >
        <ArrowUp />
      </div>

      {
        Object.keys(cinema.find(i => i.lang === language)?.content.find(b => Object.values(b)[0] === true) || [])[0] || false === true
          ?
          <ModalCinema
            modal_cinema={modal_cinema}
            cinema={cinema}
            fnCinema={fnCinema}
            splideRef={splideRef}
            fnSplideMounted={fnSplideMounted}
            fnSplideMove={fnSplideMove}
            language={language}
            title={title}
          />
          :
          null
      }

      <footer className="relative">
        <div
          className="text-white/90 text-[13px] border-b border-white absolute bottom-[-100px] mb-4"
        >
          © 2025 Alejandro Sánchez. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

function ModalCinema({ src, alt, quote, fnCinema, id, cinema, modal_cinema, splideRef, fnSplideMounted, fnSplideMove, language, title}) {
  return (
    <div
      id={`modal_cinema__`}
      className='items-center flex justify-center h-screen fixed z-40 top-[0px] left-0 w-full bg-black transition-transform duration-500'
    >
      <div
        className='w-[1000px] h-full flex flex-col justify-center items-center bg-black border-white/30¿ border¿ relative'
      >
        {/* <div
          className="absolute top-6 left-5"
        >
          {
            title()
          }
        </div> */}

        <div
          className="text-white cursor-pointer top-4 right-4 absolute text-[25px]"
          onClick={() => fnCinema(Object.keys(cinema.find(i => i.lang === language).content.find(b => Object.values(b)[0] === true) || [])[0] || false)}
        >
          <X />
        </div>

        <div  
           className="w-[500px] h-[500px]"
        >
          <Splide
            onMove={(splide) => fnSplideMove(splide)}
            onMounted={(splide) => fnSplideMounted()}
            ref={splideRef}
            options={{
              type: 'slide',
              label: 'Carrusel de Projectos',
              rewind: true,
              speed: 650,
              rewindSpeed: 650,
              rewindByDrag: true,
              width: '100%',
              perPage: 1,
              gap: 6,
              start: 0,
              paginationKeyboard: true,
              drag: true,
              snap: true,
              wheel: false,
              cover: false,
              arrows: true,
              pagination: false,
              mediaQuery: 'min',
              // breakpoints: {
              //   640: {
              //     perPage: 1,
              //   },
              //   768: {
              //     perPage: 1,
              //   },
              //   1024: {
              //     perPage: 1,
              //   },
              //   1280: {
              //     perPage: 1,
              //   },
              // }
            }
            }
            className='slide'
            hasTrack={false}
            autoFocus={true}

            aria-label='Carrousel'
          >
            <SplideTrack id='container'>
              {cinema
                .find(i => i.lang === language)
                ?.content.find(i => Object.values(i)[0] === true)
                ?.img?.map((i, index) => (
                  <SplideSlide key={index}>
                    {/* AFTER LINK THIS DIV ---> */}
                    <div className="">
                      <div
                        id={`item-${index + 1}`}
                        className="group/el-4 el-1 group group/cbk h-[500px] w-[500px] el-img overflow-hidden bg-black"
                        data-n={`n_${index + 1}`}
                      >
                        <div className="w-full h-full">
                          <ImgTor
                            className=""
                            src={i || '/image/doll.jpeg'}
                            alt={'x'}
                            containerclassName="relative w-full h-[600px]"
                            cinemaID={i.title}
                            fnCinema={fnCinema}
                            key={'imgtor2'}
                          />
                        </div>
                      </div>
                    </div>
                    {/* AFTER LINK THIS DIV ---> */}
                  </SplideSlide>
                ))}
            </SplideTrack>



            <div className="splide__arrows w-full sm:flex justify-between flex-row absolute top-5/12 left-0"
            >
              <div className="splide__arrow splide__arrow--prev">
                <div id='button-prev'
                  className='flex flex-row w-fit absolute top-0 left-[-50px] hover:scale-150 transition-transform duration-200 ease-in-out cursor-pointer'
                >
                  <ChevronLeft
                    className='text-black dark:text-white'
                    size={25}
                  />
                </div>
              </div>

              <div className="splide__arrow splide__arrow--next">
                <div id='button-next'
                  className='w-fit flex-row flex absolute top-0 right-[-50px] hover:scale-155 transition-transform duration-200 ease-in-out cursor-pointer'
                >
                  <ChevronRight
                    className='text-black dark:text-white'
                    size={25}
                  />
                </div>
              </div>
            </div>


            <div
              className='relative items-center flex justify-center flex-row mt-5 w-full'
            >
              <div
                className='flex justify-center items-center h-[50px]'
              >
                <ul
                  id="thumbnails"
                  className="flex justify-center gap-x-5"
                >
                  {
                    cinema.find(i => i.lang === language).content.find(i => Object.values(i)[0] === true)?.img.map((i, index) => (
                  <li
                    key={index}
                    className="w-[50px] h-[50px] relative cursor-pointer thumbnail"
                  >
                    <Image
                      src={i}
                      alt='x'
                      fill
                      objectFit="cover"
                    />
                  </li>
                    ))
                  }
                </ul>
              </div>
            </div>

          </Splide >
        </div>

      </div>
    </div >

  )
}

