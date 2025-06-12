'use client'

import { Github, Linkedin, Menu, Star } from 'feather-icons-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {useLanguageStore} from '../../../store'
import { useHydration } from '../../../useHydrated'
import { FaGithub, FaHouseDamage, FaLinkedin } from 'react-icons/fa'

const languages = ['es', 'de', 'fr', 'ja', 'ko', 'pt', 'ru']

const translations = {
  es: { 
    Home: 'Hogar',
    Projects: 'Proyectos',
    About: 'Sobre mí',
    Contact: 'Contacto',
    Name: 'Español'
  },
  en: {
    Home: 'Home',
    Projects: 'Projects',
    About: 'About',
    Contact: 'Contact',
    Name: 'English'
  },
  de: { 
    Home: 'Startseite',
    Projects: 'Projekte',
    About: 'Über mich',
    Contact: 'Kontakt',
    Name: 'Deutsch'
  },
  fr: { 
    Home: 'Accueil',
    Projects: 'Projets',
    About: 'À propos de moi',
    Contact: 'Contact',
    Name: 'Français'
  },
  ja: { 
    Home: 'ホーム',
    Projects: 'プロジェクト',
    About: '自己紹介',
    Contact: '連絡先',
    Name: '日本語'
  },
  ko: { 
    Home: '홈',
    Projects: '프로젝트',
    About: '내 소개',
    Contact: '연락처',
    Name: 'Coreano (한국어)'
  },
  pt: { 
    Home: 'Início',
    Projects: 'Projetos',
    About: 'Sobre mim',
    Contact: 'Contato',
    Name: 'Portugués (Brasil)'
  },
  ru: { 
    Home: 'Главная',
    Projects: 'Проекты',
    About: 'Обо мне',
    Contact: 'Контакт',
    Name: 'Русский'
  }
};

function getTranslation(language, i) {  
  return translations[language] && translations[language][i]
    ? translations[language][i]
    : i; 
}

export default function NavProjects() {
  const [isClient, setIsClient] = useState(false);
  const lenisRef = useRef(null) 
  const pathRef = useRef(null)
  const language  = useLanguageStore((state) => state.language)
  const  setLanguage  = useLanguageStore((state) => state.setLanguage)
  const hasHydrated = useHydration(useLanguageStore);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      const modal_container = document.getElementById('modal_container')
      const modal = document.getElementById('modal_language')
      const to = document.getElementById('trigger_opener')

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
        } else if (action === 'click-hidden') {
          return
          const target = e.target.id
          if (modal?.classList.contains('opacity-100') && target !== 'li_lan') {
            modal?.classList.remove('opacity-100')
            modal?.classList.add('opacity-0', 'pointer-events-none')
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

      window?.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollpos', window.scrollY);
      })

      function boldSections(sectionId) {
        if (sectionId && sectionId.trim() !== '') {
          const hash = window.location.hash
          const pathname =  window.location.pathname
          const path = pathname.slice(-1) === '/' ? pathname : pathname + '/'
          const complete = path + sectionId
          if (hash === sectionId) return
          window.history.pushState(null, '', complete)
        }

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
      
      modal_container?.addEventListener('mouseover', (e) => modal_actions(e, 'display'))
      modal_container?.addEventListener('mouseout', (e) => modal_actions(e, 'hidden'))
      modal_container?.addEventListener('click', (e) => modal_actions(e, 'click-display/hidden'))
      window?.addEventListener('click', (e) => modal_actions(e, 'click-hidden'))

      return () => {  
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
    const sections = document.querySelectorAll('[id^="#homeN"], [id^="#projectsN"], [id^="#aboutN"], [id^="#contactN"]')
    const section = document.getElementById(sectionId)
    const path_name = 
      language === 'es' ? '/es/' + sectionId 
      : language === 'en' ? '/en/' + sectionId
      : language === 'de' ? '/de/' + sectionId
      : language === 'fr' ? '/fr/' + sectionId
      : language === 'ja' ? '/ja/' + sectionId
      : language === 'pt' ? '/pt/' + sectionId
      : language === 'ru' ? '/ru/' + sectionId
      : null
    if (section && lenisRef.current) {
      window.history.pushState(null, '', path_name);

      const offset = 25
      const top = section.offsetTop + offset  

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
    const x = window.location.hash
    window.history.pushState(null, '', '/' + lan + '/' + x);
  } 

  // if (!isClient) return null
  // if (!hasHydrated) return

  return (
    <div 
      className='fixed top-0 left-0 w-full h-16 z-40 bg-black/30¿ justify-center items-center flex bg-transparent backdrop-blur-md border-white/30 border-b'>
      <div
        className='flex items-center justify-between w-full px-5 flex-row sm:hidden'
      >
        <div>
          <Menu />
        </div>
        <ol
          className='flex flex-row items-center gap-x-5'>
          <li>
            <FaHouseDamage 
              size={25}
            />
          </li>
        </ol>
      </div>
      <div 
        className='w-full justify-between items-center px-16 hidden sm:flex'>
          
        <ol 
          className='flex flex-row items-center gap-x-5'>
          <li>
            <FaHouseDamage
              size={25}
            />
          </li>
        </ol>
        <ol 
          className='flex flex-row items-center gap-x-5'>
          {
            ['1', '2', '3', '4',].map((i, index) => (
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
          <li className='text-white ml-4'>
            <FaGithub 
              size={25}
              color='white' 
            />
          </li>
          <li
            className='ml-4'
          >
            <FaLinkedin
              size={25}
            />
          </li>
        </ol>
        
      </div>
    </div>
  )
}
