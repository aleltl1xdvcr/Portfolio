'use client'

import { useEffect, useRef, useState } from "react"
import { useLanguageStore } from "../../store"
import { useHydration } from "../../useHydrated"
import { ArrowUp, ChevronLeft, ChevronRight, X } from "feather-icons-react"
import { IoMdSettings } from "react-icons/io";
import '../styles.css'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core'
import Image from "next/image"
import { home, profile, contact } from '../../data'
import {ProjectsPage, Skills, } from "./sections"
import { Contact } from "./contact"
import './styles.css'

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
              className="flex flex-col w-full"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.content?.title }}
                className="text-[29px]"
              />
              <br />
              <div
                className="text-[17.5px] mb-10"
              >
                <p
                  dangerouslySetInnerHTML={{ __html: item.content?.description }}
                />
              </div>
            </div>
          ))

      case 'about':
        return profile
          .filter((item) => item.language === language)
          .map((item, index) => (
            <div
              key={`${item.content?.title || 'about'}_${index}`}
              className="flex flex-col w-full"
            >
              <div>
                <p>{item.content?.description}</p>
              </div>
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
    setCinema(id)
  }

  function fnThumbnail() {
      var thumbnails = document.getElementsByClassName('thumbnail')
      thumbnails[0].classList.add('is-active')

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

  const base = cinema.filter(i => i.lang === language).find(i => Object.values(i.content[0])[0] === true)?.content
  const idPropModalCinema = Object.keys(cinema.filter(i => i.lang === language).find(i => Object.values(i.content[0])[0] === true)?.content[0] || {})[0]
  const isShowModalCinema = cinema.filter(i => i.lang === language).map(o => Object.values(o.content[0])[0]).find(i => i === true)

  return (
    <div className="mt-[100px] w-full flex flex-col items-center justify-center">
      <main
        className="flex justify-center items-center w-full">
        <div
          className="w-full px-6 sm:px-0 sm:w-[80vw] md:w-[70vw] flex justify-center flex-col lg:w-[50vw] relative"
        >
          <div
            className="w-full"
            id="#home"
          >
            <RenderSection key={`HOME_${language}`} name_section='home' language={language} />
          </div>

          <br />

          <div
            className="w-full"
            id="#skills"
            label="Sección 2"
          >
            <RenderSection key={`SKILLS_${language}`} name_section='skills' language={language} />
          </div>

          <br />
          
          <div
            className="w-full"
            id="#projects"
            label="Sección 3"
          >
            <ProjectsPage
              data={data}
            />
          </div>
          
          <div
            className="flex flex-col gap-y-5 mt-5 w-full"
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
            className="text-[30px] w-full"  
          >
            {Object.keys(contact.find(i => i.language === language) || '')[2]}
          </h1>
            <Contact />
          <br />
        </div>
      </main>

      <div
        id="button_to_top"
        onClick={() => toTop()}
        className={`hidden circular-hover fixed z-20 bottom-20 right-20 hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer`}
      >
        <ArrowUp />
      </div>

      {
        isShowModalCinema
          ?
          <ModalCinema
            id={idPropModalCinema}
            modal_cinema={modal_cinema}
            cinema={cinema}
            fnCinema={fnCinema}
            splideRef={splideRef}
            fnSplideMounted={fnSplideMounted}
            fnSplideMove={fnSplideMove}
            language={language}
            base={base}
          />
          :
          null
      }

      <footer
        className="relative w-full"
      >
        <div
          className="text-[13px] border-b border-white absolute bottom-[-100px] mb-4 w-full"
        >
          © 2025 Alejandro Sánchez. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

function ModalCinema({ src, alt, quote, fnCinema, id, cinema, modal_cinema, splideRef, fnSplideMounted, fnSplideMove, base}) {
  const items = base[0].items
  const itemIndex = splideRef.current?.splide.index || 0
  const title = items[itemIndex].title
  const [scaleSt, setScaleSt] = useState(1)
  const [isOpenModalZoom,setIsOpenModalZoom] = useState(false)
  const [isVisibleSettings, setIsVisibleSettings] = useState(false)

  let hasOppenedModalZoom = useRef(false)

  function toggleSettings(e) {
    if (e.type === 'mouseleave' && hasOppenedModalZoom.current) {
      hasOppenedModalZoom.current = false
    }
    if (hasOppenedModalZoom.current) return
    if (isOpenModalZoom) {
      setIsVisibleSettings(true)
      hasOppenedModalZoom.current = true
    }
    else if (e.type === 'mouseover') {
      setIsVisibleSettings(true)
    } else if (e.type === 'mouseleave') {
      setIsVisibleSettings(false)
    }
  }

  function handleTabScale(type) {
    const v = 0.25
    if (type === 'increase') {
      setScaleSt(prev => prev + v)
    } else if (type === 'decrease') {
      setScaleSt(prev => prev - v)
    }
  }

  function toggleModalZoom(e) {
    if (e.type === 'mouseenter') {
      setIsOpenModalZoom(true)
    } else if (e.type === 'mouseleave') {
      setIsOpenModalZoom(false)
    }
  }

  // ci = container image

  function onZoom(e, el, ci) {
    toggleSettings(e)
    const img = document.getElementById(el)
    const ciEl = document.getElementById(ci)
    const rect = ciEl.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = `scale(${scaleSt})`
  }

  function offZoom(e, el) {
    const img = document.getElementById(el)
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
  }

  return (
    <div
      id={`modal_cinema__`}
      className='items-center¿ flex justify-center h-screen fixed z-40 top-[0px] left-0 w-full dark:bg-black dark:text-white bg-white
       text-black transition-transform duration-500'
    >
      <div
        className="cursor-pointer top-2 right-2 sm:top-4 sm:right-6 absolute"
        onClick={() => fnCinema(id)}
      >
        <X 
          className="sm:flex hidden"
         size={35}
        />
        <X
          className="sm:hidden"
          size={28}
        />
      </div>
      <div
        className="absolute left-4 top-4 text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] italic"
      >
        { title }
      </div>
      <div
        className="h-[100vh] w-full flex items-center justify-center flex-col"
      >
        <div
          className='flex flex-col justify-center items-center h-[43vh] dark:bg-black bg-white relative'
        >
          <div
            className="w-[90vw] h-[80vh] sm:w-[80vw]"
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
              }
              }
              className='slide fur294 h-[90vh]¿'
              hasTrack={false}
              autoFocus={true}
              aria-label='Carrousel'
            >
              <div
                className="relative"
                onMouseLeave={(e) => toggleSettings(e)}
              >
                <div
                  onMouseLeave={(e) => toggleModalZoom(e)}
                  className={
                    `absolute right-2 top-2 z-40 
                   text-white text-[30px]`}
                >
                  <div
                    className={`${isVisibleSettings ? 'relative z-50' : 'hidden'} `}
                  >
                    <IoMdSettings
                      className="absolute right-0 top-0"
                      onMouseEnter={(e) => toggleModalZoom(e)}
                    />
                  </div>
                  <div
                    className={
                      `${isOpenModalZoom ? null : 'hidden'} bg-black px-5 py-1 gap-5 mt-6 flex flex-row items-center justify-center`
                    }
                  >
                    <span
                      className="text-[15px]"
                    >
                      Zoom
                    </span>
                    <span
                      className="flex flex-row items-center gap-x-3"
                    >
                      <span
                        className="cursor-pointer"
                        onClick={() => handleTabScale('decrease')}
                      >
                        -
                      </span>
                      <span
                        className="text-[15px]"
                      >
                        {scaleSt * 100}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleTabScale('increase')}
                      >
                        +
                      </span>
                    </span>
                  </div>
                </div>
                <SplideTrack id='container'>
                  {items?.map((i, index) => (
                    <SplideSlide

                      className='h-[30vh] sm:h-[35vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh]'
                      key={index}>
                      <div
                        onMouseLeave={(e) => offZoom(e, `c-image-zoom${index}`, `czoomedn${index}`)}
                        onMouseMove={(e) => onZoom(e, `c-image-zoom${index}`, `czoomedn${index}`)}
                        onMouseOver={(e) => onZoom(e, `c-image-zoom${index}`, `czoomedn${index}`)}
                        className="h-full cursor-zoom-in"
                      >
                        <div
                          id={`item-${index + 1}`}
                          className="group/el-4 el-1 group group/cbk h-full el-img overflow-hidden bg-black"
                          data-n={`n_${index + 1}`}
                        >
                          <div
                            id={`czoomedn${index}`}
                            className="w-full h-full relative"
                          >
                            <Image
                              id={`c-image-zoom${index}`}
                              priority
                              className="transition-transform duration-700"
                              fill
                              src={i.img}
                              alt={'x'}
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </div>

              <div className="splide__arrows w-full sm:flex justify-between flex-row absolute top-5/12 left-0 hidden"
              >
                <div className="splide__arrow splide__arrow--prev">
                  <div id='button-prev'
                    className='flex flex-row w-fit absolute top-0 left-[-50px] hover:scale-150 transition-transform duration-200 ease-in-out cursor-pointer'
                  >
                    <ChevronLeft
                      className='text-black dark:'
                      size={25}
                    />
                  </div>
                </div>

                <div className="splide__arrow splide__arrow--next">
                  <div id='button-next'
                    className='w-fit flex-row flex absolute top-0 right-[-50px] hover:scale-155 transition-transform duration-200 ease-in-out cursor-pointer'
                  >
                    <ChevronRight
                      className='text-black dark:'
                      size={25}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`relative items-center flex justify-center flex-row mt-5 w-full`}
              >
                <div
                  className='flex ju¿stify-center items-ce¿nter overflow-x-auto'
                >
                  <ul
                    id="thumbnails"
                    className="flex justify-center gap-x-5 mx-2"
                  >
                    {
                      items
                        .map((i, index) => (
                          <li
                            key={index}
                            className={
                              `w-[20vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-[10vh] relative cursor-pointer thumbnail`
                            }
                          >
                            <Image
                              src={i.img}
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
      </div>
    </div >
  )
}

