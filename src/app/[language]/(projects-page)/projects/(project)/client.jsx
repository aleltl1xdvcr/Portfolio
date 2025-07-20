'use client'

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useLanguageStore } from '../../../../store';
import ImgTor from '../../../../utils/img-tor';
import { ArrowUp, ChevronLeft, ChevronRight, Pause } from 'feather-icons-react';
import '@splidejs/splide/css/skyblue';
import { Play } from 'react-feather';
import MoreProjects from './more-projects';
import { projects } from "../../../../data";

export const dynamic = 'force-dynamic';

export default function Client({ project_slug, }) {
  const cinema = useLanguageStore((state) => state.cinema)
  const language = useLanguageStore((state) => state.language)
  const setCinema = useLanguageStore((state) => state.setCinema)
  const splideRef = useRef(null)

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
    splideRef.current
  }

  function fnSplideMove(splide) {
    fnOnMovedSlider(splide)
  }

  function fnCinema(id) {
    setCinema(Object.keys(cinema.find(i => i.lang === language)?.content.find(b => Object.keys(b)[0] === id) || [])[0] || null)
  }

  function fnThumbnail() {
    var thumbnails = document.getElementsByClassName('thumbnail_projects')
    thumbnails[0]?.classList.add('is-active')

    for (var i = 0; i < thumbnails.length; i++) {
      initThumbnail(thumbnails[i], i)
    }

    function initThumbnail(thumbnail, index) {
      thumbnail.addEventListener('click', function () {
        splideRef.current?.go(index)
      })
    }
  }

  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const splide_data = cinema
    .find(i => i.lang === language)
    ?.content.find(i => i.url === project_slug)

  const projects_data = projects.find(i => i.language === language).content

  function playCarruselFn() {
    splideRef.current.play()
  }

  function pauseCarruselFn() {
    splideRef.current.splide.pause()
  }

  const title = Object.keys(cinema.find(i => i.lang === language).content.find(i => i.url === project_slug))[0]

  return (
    <div
      className="mt-20 w-fit justify-center flex flex-col items-center"
    >
      <h1
        className='text-[30px] mb-5'
      >
        {title}
      </h1>

      <div className='w-[80vw]'
      >
        <Splide
          onMounted={(splide) => fnSplideMounted(splide)}
          ref={splideRef}
          options={{
            type: 'loop',
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
            drag: 'free',
            focus: 'center',
            snap: true,
            wheel: false,
            cover: false,
            arrows: false,
            pagination: false,
            mediaQuery: 'min',
            autoScroll: {
              speed: 1,
              pauseOnHover: false,
              pauseOnFocus: false,
              useToggleButton: true,
            },
          }
          }
          extensions={{ AutoScroll }}
          className='slide'
          hasTrack={false}
          autoFocus={true}
          aria-label='Carrousel Projects'
        >
          <SplideTrack id='container'>

            {splide_data?.img?.map((i, index) => (
              <SplideSlide key={index}>
                <div className="">
                  <div
                    id={`item-${index}`}
                    className="group/el-4 el-1 group group/cbk h-full w-full el-img overflow-hidden bg-black"
                    data-n={`n_${0 + 1}`}
                  >
                    <div className="w-full h-[80vh] relative">
                      <ImgTor
                        className=""
                        src={i || '/images/doll.jpeg'}
                        alt={i}
                        containerclassName="w-[500px] h-[500px] relative"
                        key={`imgtor4_${0}_${language}`}
                      />
                    </div>
                  </div>
                </div>
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

          <button className="splide__toggle absolute top-[530px] left-0 bg-black  p-4">
            <span className="splide__toggle__play">
              <Play />
            </span>
            <span className="splide__toggle__pause">
              <Pause />
            </span>
          </button>

        </Splide >

      </div>

      <div
        className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] relative">
        <div
        >
          <p dangerouslySetInnerHTML={{ __html: projects_data[0].content }} />
        </div>

        <div>
          <Stack
            project_slug={project_slug}
            language={language}
          />
        </div>

        <div>
          <MoreProjects />
        </div>

      </div>

      <div
        id="button_to_top2"
        onClick={() => toTop()}
        className={`circular-hover fixed z-20 bottom-[50px] right-[50px] hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer`}
      >
        <ArrowUp />
      </div>

    </div>
  )
}

function Stack({ language, project_slug }) {
  return (
    <div
      className='flex flex-col items-start'
    >
      <div
        className='my-3'
      >
        <h1
          className='text-[30px]'
        >
          Stack
        </h1>
      </div>
      <ul
        className='flex flex-row items-center gap-x-3 text-[15px]'
      >
        {
          projects
            .find(i => i.language === language)
            ?.content
            .find(i => i.url === project_slug)
            ?.stack.map((i, n) => (
              <li
                className='bg-zinc-900 px-2 py-1 rounded-[3px]'
                key={`${n}__${i}__`}
              >
                {i}
              </li>
            ))
        }
      </ul>
    </div>
  )
}