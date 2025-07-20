'use client'

import { Menu, Star } from 'feather-icons-react'
import { useLayoutEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {useLanguageStore} from './store'
import { useHydration } from './useHydrated'
import { FaGithub, FaHome } from "react-icons/fa";
import { useThemeStore } from './store-theme'
import { MdDarkMode, MdLightMode } from "react-icons/md"

const translations = {
  es: { 
    Home: 'Hogar',
    Projects: 'Proyectos',
    About: 'Sobre mí',
    Contact: 'Contacto',
    Name: 'Español',
    Skills: 'Habilidades',
  },
  en: {
    Home: 'Home',
    Projects: 'Projects',
    About: 'About',
    Contact: 'Contact',
    Name: 'English',
    Skills: 'Skills',
  },
  de: { 
    Home: 'Startseite',
    Projects: 'Projekte',
    About: 'Über mich',
    Contact: 'Kontakt',
    Name: 'Deutsch',
    Skills: 'Fähigkeiten',
  },
  fr: { 
    Home: 'Accueil',
    Projects: 'Projets',
    About: 'À propos de moi',
    Contact: 'Contact',
    Name: 'Français',
    Skills: 'Compétences',
  },
  ja: { 
    Home: 'ホーム',
    Projects: 'プロジェクト',
    About: '自己紹介',
    Contact: '連絡先',
    Name: '日本語',
    Skills: 'Skills',
  },
  ko: { 
    Home: '홈',
    Projects: '프로젝트',
    About: '내 소개',
    Contact: '연락처',
    Name: '(한국어)',
    Skills: '기술 스킬',
  },
  pt: { 
    Home: 'Início',
    Projects: 'Projetos',
    About: 'Sobre mim',
    Contact: 'Contato',
    Name: 'Portugués (Brasil)',
    Skills: 'Habilidades',
  },
  ru: { 
    Home: 'Главная',
    Projects: 'Проекты',
    About: 'Обо мне',
    Contact: 'Контакт',
    Name: 'Русский',
    Skills: 'Навыки ',
  }
};

function getTranslation(language, i) {  
  return translations[language] && translations[language][i]
    ? translations[language][i]
    : i; 
}

export default function Nav() {
  const [isClient, setIsClient] = useState(false);
  const lenisRef = useRef(null) 
  const pathRef = useRef(null)
  const language  = useLanguageStore((state) => state.language)
  const  setLanguage  = useLanguageStore((state) => state.setLanguage)
  const setLenisStore = useLanguageStore((state) => state.setLenis)
  const hasHydrated = useHydration(useLanguageStore);
  const { theme, toggleTheme } = useThemeStore();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      const sections = document.querySelectorAll('[id^="#homeN"], [id^="#skillsN"], [id^="#projectsN"], [id^="#aboutN"], [id^="#contactN"]')
      const sectionA = document.getElementById('#home');
      const sectionB = document.getElementById('#skills');
      const sectionC = document.getElementById('#projects');
      const sectionD = document.getElementById('#about');
      const sectionE = document.getElementById('#contact');
      const modal_container = document.getElementById('modal_container')
      const modal = document.getElementById('modal_language')
      const to = document.getElementById('trigger_opener')
      const button_to_top = document.getElementById('button_to_top')

      function modal_actions(e, action) {
        if (action === 'display') {
          if (modal?.classList.contains('opacity-0')) {
            const w_modal = modal.offsetWidth / 2
            const w_to = to.offsetWidth / 2
            const width = '-' + (w_modal - w_to) + 'px'
            
            modal.style.left = width
            modal?.classList.remove('opacity-0', 'pointer-events-none')
            modal?.classList.add('opacity-100')
          }
        } else if (action === 'hidden') {
          if (modal?.classList.contains('opacity-100')) {
            modal?.classList.remove('opacity-100')
            modal?.classList.add('opacity-0', 'pointer-events-none')
          } 
        } else if (action === 'click-display/hidden') {
          if (modal?.classList.contains('opacity-100')) {
            modal?.classList.remove('opacity-100')
            modal?.classList.add('opacity-0', 'pointer-events-none')
          } else if (modal?.classList.contains('opacity-0') ) {
            modal?.classList.remove('opacity-0', 'pointer-events-none')
            modal?.classList.add('opacity-100')
          }
        } 
      }

      const path_url = window.location
      const lan = path_url.pathname.slice(1, 3)

      if (lan && lan.trim !== '') {
        setLanguage(lan)
      } 

      const asPath = window.location.hash
      pathRef.current = asPath

      lenisRef.current = new Lenis({
        duration: 1, 
        easing: 'ease', 
        smoothWheel: true, 
        smoothTouch: true, 
        prevent: (node) => node.id === 'modal_cinema__'
      })

      setLenisStore(lenisRef)
      
      function raf(time) {
        lenisRef.current.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      window?.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollpos', window.scrollY);
      })

      function boldSections(sectionId) {
        if (sectionId && sectionId.trim() !== '') {
          const hash = window.location.hash
          const pathname =  window.location.pathname
          const path = pathname.slice(-1) === '/' ? pathname : pathname
          const complete = path
          if (hash === sectionId) return
          window.history.pushState(null, '', complete)
        }

        sections.forEach((i, _) => {
          const id = i.id.length > 0 ? i.id.slice(0, -1) : i.id
          if (i?.classList.contains('font-bold') && id !== sectionId) {
            i?.classList.add('opacity-0')
            i?.classList.remove('opacity-0', 'font-bold')
            i?.classList.add('opacity-100')
          }
          if (!(i?.classList.contains('font-bold')) && id === sectionId) {
            i?.classList.add('opacity-0')
            i?.classList.remove('opacity-0')
            i?.classList.add('font-bold', 'opacity-100')
          }
        })
      }

      function ActionsScrollSections(e) {
        const scrollY = e.scroll;
        if (scrollY <= 100 && button_to_top?.classList.contains('opacity-100')) {
          button_to_top?.classList.remove('opacity-100')
          button_to_top?.classList.add('opacity-0')
        } else if (scrollY >= 101 && button_to_top?.classList.contains('opacity-0')) {
          button_to_top?.classList.remove('opacity-0')
          button_to_top?.classList.add('opacity-100')
        }

        const sectionAOffset = sectionA.offsetTop;
        const sectionBOffset = sectionB.offsetTop;
        const sectionCOffset = sectionC.offsetTop;
        const sectionDOffset = sectionD.offsetTop;

        if (scrollY >= sectionAOffset && scrollY < sectionBOffset) {
          boldSections('#home')
        }

        else if (scrollY >= sectionBOffset && scrollY < sectionCOffset) {
          boldSections('#skills')
        }

        else if (scrollY >= sectionCOffset && scrollY < sectionDOffset) {
          boldSections('#projects')
        }

        else if (scrollY >= sectionDOffset) {
          boldSections('#contact')
        }
      }

      modal_container?.addEventListener('mouseover', (e) => modal_actions(e, 'display'))
      modal_container?.addEventListener('mouseout', (e) => modal_actions(e, 'hidden'))
      modal_container?.addEventListener('click', (e) => modal_actions(e, 'click-display/hidden'))
      window?.addEventListener('click', (e) => modal_actions(e, 'click-hidden'))

      lenisRef.current.on('scroll', (e) => {
        ActionsScrollSections(e)
      });


      return () => {  
        cancelAnimationFrame(raf); 
        lenisRef.current.destroy()
        window?.removeEventListener('beforeunload', () => {
          localStorage.setItem('scrollpos', window.scrollY);
        })
        modal_container?.removeEventListener('mouseover', (e) => modal_actions(e, 'display'))
        modal_container?.removeEventListener('mouseleave', (e) => modal_actions(e, 'hidden'))
        modal_container?.removeEventListener('click', (e) => modal_actions(e, 'click-display/hidden'))
        window?.removeEventListener('click', (e) => modal_actions(e, 'click-hidden'))
      }
    }
  }, [isClient]) 

  useLayoutEffect(() => {
    const savedScrollPos = sessionStorage.getItem('scrollPosition');
    if (savedScrollPos) {
      window.scrollTo(0, parseInt(savedScrollPos, 10));
    }

  }, [isClient])

  const handleScrollToSection = (sectionId) => {
    console.log('SECTION ID', sectionId)
    const sections = document.querySelectorAll('[id^="#homeN"], [id^="#skillsN"], [id^="#projectsN"]')
    const section = document.getElementById(sectionId)
    console.log('SECTION', section)
    const path_name = 
      language === 'es' ? '/es/' + sectionId 
      : language === 'en' ? '/en/' + sectionId
      : language === 'de' ? '/de/' + sectionId
      : language === 'fr' ? '/fr/' + sectionId
      : language === 'ja' ? '/ja/' + sectionId
      : language === 'pt' ? '/pt/' + sectionId
      : language === 'ru' ? '/ru/' + sectionId
      : null

    console.log('PATH NAME', path_name)

    if (section && lenisRef.current) {
      //window.history.pushState(null, '', path_name);

      const offset = 25
      const top = section.offsetTop + offset  

      lenisRef.current.scrollTo(top, {
        duration: 1.2,  
        easing: 'ease', 
      })

      sections.forEach((i, index) => {
        const id = i.id.length > 0 ? i.id.slice(0, -1) : i.id
        if (i?.classList.contains('font-bold') && id !== sectionId) {
          i?.classList.add('opacity-0')
          i?.classList.remove('opacity-0', 'font-bold')
          i?.classList.add('opacity-100')
        } 
         if (!(i?.classList.contains('font-bold')) && id === sectionId) {
           i?.classList.add('opacity-0')
             i?.classList.remove('opacity-0')
             i?.classList.add('font-bold', 'opacity-100')
        }
      })
    }
  }

  function handleLanguage(n, ) {
    const lan = n === 'Deutsch' ? 'de' : n === 'Español' ? 'es' : n === 'English' ? 'en' : n === 'Français' ? 'fr' : n === '日本語' ? 'ja' 
    : n === 'Português(do Brasil)' ? 'pt' : n === '한국어' ? 'ko' : n === 'Português (do Brasil)' ? 'pt' : n === 'Русский' ? 'ru' : null
    setLanguage(lan)
    const x = ''
    window.history.pushState(null, '', '/' + lan + '/' + x);
  } 

  if (!isClient) return null; 
  if (!hasHydrated) return


  const cycleTheme = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    toggleTheme(nextTheme);
  };

  return (
    <div 
      className='fixed top-0 left-0 w-full h-16 z-40 bg-black/30¿ justify-center items-center flex bg-transparent backdrop-blur-md border-white/30 border-b'>
      <div
        className='flex items-center justify-between w-full px-5 flex-row sm:hidden'
      >
        <div
          className='relative h-6'
        >
          <span
            className="absolute z-40 flex items-start"
          >
            {theme === 'dark'
              ? <MdDarkMode
                onClick={() => cycleTheme('light')}
                size={23}
              />
              : theme === 'light'
                ? <MdLightMode
                  onClick={() => cycleTheme('light')}
                  size={23}
                />
                : <MdLightMode
                  onClick={() => cycleTheme('light')}

                  size={23}
                />
            }
          </span>
        </div>
        <ol
          className='flex flex-row items-center gap-x-5'>
          <li>
            <Star />
          </li>
        </ol>
      </div>
      <div 
        className='w-full justify-between items-center px-16 hidden sm:flex'>
          
        <div 
          className='flex flex-row items-center gap-x-5 relative'>
          <span
            className="absolute z-40 flex items-start"
          >
            {theme === 'dark'
              ? <MdDarkMode
                onClick={() => cycleTheme('light')}
                size={23}
              />
              : theme === 'light'
                ? <MdLightMode
                  onClick={() => cycleTheme('light')}
                  size={23}
                />
                : <MdLightMode
                  onClick={() => cycleTheme('light')}

                  size={23}
                />
            }
          </span>
        </div>
        <ol 
          className='flex flex-row items-center gap-x-5'>
          {
            ['Home', 'Skills', 'Projects', 'Contact'].map((i, index) => (
              <li
               
                id={'#' + i.toLowerCase() + 'N'}
                key={index}
                className='cursor-pointer transition-opacity duration-1000'
                onClick={() => handleScrollToSection('#' + i.toLowerCase())}>
                {
                  getTranslation(language, i)
                } 
              </li>
            ))
          }
        </ol>
        <ol className='flex flex-row items-center'>
          
          <div
            id='modal_container'
            className='relative flex flex-row'
          >
            <div
              id='trigger_opener'
            >
              <li
                id='li_lan'
                
                className={`cursor-pointer `}
              >
                {
                  getTranslation(language, 'Name')
                }
              </li>
            </div>
            <div
              className='absolute opacity-0 transition-opacity duration-400 mt-[20px] w-fit whitespace-nowrap'
              id='modal_language'
            >
              <div
                className='flex flex-col items-start w-full border mt-[18px] border-white p-6 bg-black'
                  >
                <div

                  className='flex flex-row items-center gap-x-2 w-full mb-2'
                >
                  <input type="radio" />
                  <li
                   
                    className={`cursor-pointer`}
                  >
                    Remeber Language
                  </li>
                </div>
                <div
                  className='flex flex-col'
                >
                  {
                    ['Deutsch', 'Español', 'English', 'Français', '日本語', '한국어', 'Português (do Brasil)', 'Русский']
                      .map((i, n) => (
                        <li
                          key={n}
                          onClick={() => handleLanguage(i)}
                          className={`cursor-pointer mb-2 hover:underline ${language === 'en' ? 'font-bold' : null}`}
                        >
                          {i}
                        </li>
                      ))
                  }
                </div>
                
              </div>

            </div>
          </div>
           <a
            target="_blank" 
            rel="noopener noreferrer"
            href='https://github.com/aleltl1xdvcr'
            className=' ml-4'>
            <FaGithub 
              size={25}
            color='white' />
          </a>
        </ol>
        
      </div>
    </div>
  )
}
