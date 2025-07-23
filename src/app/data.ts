export const translations = {
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

export const home = [
  {
    "language": "es",
    "content": {
      "title": "Me llamo Alejandro; <span>Desarrollador Web Full Stack de México</span>.",
      "description": "<span>Desarrollador Full Stack con más de 3 años de experiencia</span> diseñando y entregando <span>soluciones digitales de alto rendimiento y optimizadas para la conversión</span> — que abarcan aplicaciones web responsivas, plataformas de comercio electrónico escalables, integraciones headless CMS, experiencias en tiempo real, páginas de aterrizaje dinámicas, herramientas internas y sitios web de marketing."
    }
  },
  {
    "language": "en",
    "content": {
      "title": "My name is Alejandro; a Freelance Full Stack Web Developer from Mexico.",
       "description": "<span>Full Stack Developer with 3+ years of experience</span> architecting and delivering <span >high‑performance, conversion‑optimized </span> digital solutions — spanning responsive web applications, scalable e‑commerce platforms, headless CMS integrations, real‑time experiences, dynamic landing pages, internal tools, and marketing websites."
    }
  },
  {
    "language": "de",
    "content": {
      "title": "Ich heiße Alejandro; freiberuflicher Full-Stack-Webentwickler aus Mexiko.",
      "description": "<span>Full Stack Entwickler mit über 3 Jahren Erfahrung</span> in der Architektur und Bereitstellung von <span>leistungsstarken, konversionsoptimierten</span> digitalen Lösungen — von responsiven Webanwendungen und skalierbaren E‑Commerce‑Plattformen über Headless‑CMS‑Integrationen und Echtzeit‑Erlebnisse bis hin zu dynamischen Landing‑Pages, internen Tools und Marketing‑Websites."

    }
  },
  {
    "language": "fr",
    "content": {
      "title": "Je m'appelle Alejandro; développeur Web Full Stack indépendant du Mexique.",
      "description": "<span>Développeur Full Stack avec plus de 3 ans d’expérience</span> concevant et livrant <span>des solutions digitales hautes performances et optimisées pour la conversion</span> — couvrant des applications web responsives, des plateformes e‑commerce évolutives, des intégrations headless CMS, des expériences en temps réel, des pages d’atterrissage dynamiques, des outils internes et des sites web marketing."
    }
  },
  {
    "language": "ja",
    "content": {
      "title": "アレハンドロと申します。メキシコ出身のフリーランスのフルスタックWeb開発者です。",
      "description": "3年以上の経験を持つフルスタック開発者として、ハイパフォーマンスかつコンバージョン最適化されたデジタルソリューションを設計・提供しています — レスポンシブWebアプリケーション、スケーラブルなEコマースプラットフォーム、ヘッドレスCMS統合、リアルタイム体験、動的なランディングページ、社内ツール、マーケティングサイトを含みます。"
    }
  },
  {
    "language": "pt",
    "content": {
      "title": "Me chamo Alejandro; desenvolvedor Web Full Stack freelancer do México.",
      "description": "<span>Desenvolvedor Full Stack com mais de 3 anos de experiência</span> projetando e entregando <span>soluções digitais de alto desempenho e otimizadas para conversão</span> — abrangendo aplicações web responsivas, plataformas de e‑commerce escaláveis, integrações headless CMS, experiências em tempo real, landing pages dinâmicas, ferramentas internas e sites de marketing."
    }
  },
  {
    "language": "ru",
    "content": {
      "title": "Меня зовут Алехандро; независимый Full Stack веб-разработчик из Мексики.",
      "description": "3年以上の経験を持つフルスタック開発者として、ハイパフォーマンスかつコンバージョン最適化されたデジタルソリューションを設計・提供しています — レスポンシブWebアプリケーション、スケーラブルなEコマースプラットフォーム、ヘッドレスCMS統合、リアルタイム体験、動的なランディングページ、社内ツール、マーケティングサイトを含みます。"
    }
  }
]

export const projects = [
  // Ecommerce Search Clone Adidas
  {
    "language": "es",
    "content": [
      {
        "title": "Clon de Búsqueda del Ecommerce de Adidas",
        "description": "Un proyecto full stack desarrollado y desplegado. Con un stack diverso, me he esforzado por cumplir con todas las funciones del ecommerce original.",
        "status": "Completado",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", 'Frammer Motion', 'Splide', 'Redis', 'Render', 'Postgres', 'Algolia'],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: "Modo Oscuro"
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: "Paginación Inteligente"
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: "Filtrado Avanzado"
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: "Tema Oscuro en Móvil"
          },
          {
            img: "/images/adidas-project-overview5.png",
            title: "Sistema de Búsqueda Móvil"
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: "Modal para el Menú Móvil"
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: "Sistema de búsqueda persistido en la URL del navegador"
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      },
    ]
  },
  {
    "language": "en",
    "content": [
      {
        "title": "Adidas Ecommerce Search Clone",
        "description": "A full stack project developed and deployed. With a diverse stack, I have strived to fulfill all the functions of the original ecommerce.",
        "status": "Completed",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Framer Motion", "Splide", "Redis", "Render", "Postgres", "Algolia"],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: 'Dark Mode'
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: 'Smart Pagination'
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: 'Advanced Filtering'
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: 'Theme Dark Mobile'
          }, {
            img: "/images/adidas-project-overview5.png",
            title: 'Mobile Search System'
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: 'Modal for the Mobile Menu'
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: 'Search system persisted in the browser URL'
          }],
       "url": "adidas-ecommerce-search-clone",
        "content": ""
      }
    ]
  },
{
    "language": "ru",
    "content": [
      {
        "title": "Клон поиска электронной коммерции Adidas",
        "description": "Полноценный full stack проект, разработанный и развернутый. С разнообразным стеком я стремился реализовать все функции оригинального интернет-магазина.",
        "status": "Завершено",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Framer Motion", "Splide", "Redis", "Render", "Postgres", "Algolia"],
        items: [
          {
            img: "/images/adidas-project-overview1.png",
            title: "Темная тема"
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: "Умная пагинация"
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: "Расширенная фильтрация"
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: "Темная тема на мобильных"
          },
          {
            img: "/images/adidas-project-overview5.png",
            title: "Мобильная поисковая система"
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: "Модальное окно для мобильного меню"
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: "Система поиска, сохраняющая состояние в URL браузера"
          }
        ],
      "url": "klon-poiska-ecommerce-adidas",
        "content": ""
      }
    ]
  },
  {
    "language": "ja",
    "content": [
      {
        "title": "アディダスEコマース検索クローン",
        "description": "フルスタックで開発およびデプロイされたプロジェクトです。多様なテクノロジースタックを使用し、オリジナルのEコマースのすべての機能を実現しました。",
        "status": "完了",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Framer Motion", "Splide", "Redis", "Render", "Postgres", "Algolia"],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: "ダークモード"
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: "スマートページネーション"
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: "高度なフィルタリング"
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: "モバイル向けダークテーマ"
          },
          {
            img: "/images/adidas-project-overview5.png",
            title: "モバイル検索システム"
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: "モバイルメニュー用モーダル"
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: "ブラウザURLに永続化された検索システム"
          }
        ],
        "url": "adidas-ecommerce-search-clone",
        "content": ""
      }
    ]
  },
  {
    "language": "de",
    "content": [
      {
        "title": "Adidas E‑Commerce Suchklon",
        "description": "Ein Full‑Stack-Projekt, entwickelt und bereitgestellt. Mit einem vielseitigen Tech‑Stack habe ich mich bemüht, alle Funktionen des originalen E‑Commerce umzusetzen.",
        "status": "Abgeschlossen",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Framer Motion", "Splide", "Redis", "Render", "Postgres", "Algolia"],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: "Dunkler Modus"
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: "Intelligente Paginierung"
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: "Erweiterte Filterung"
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: "Dunkles Thema auf Mobilgeräten"
          },
          {
            img: "/images/adidas-project-overview5.png",
            title: "Mobiles Suchsystem"
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: "Modalfenster für das mobile Menü"
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: "Suchsystem, das in der Browser-URL gespeichert wird"
          }
        ],
        "url": "adidas-ecommerce-suchklon",
        "content": ""
      }
    ]
  },
  {
    "language": "pt",
    "content": [
      {
        "title": "Clone de Pesquisa do Ecommerce da Adidas",
        "description": "Um projeto full stack desenvolvido e implantado. Com um stack diversificado, esforcei‑me para cumprir todas as funções do ecommerce original.",
        "status": "Concluído",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Framer Motion", "Splide", "Redis", "Render", "Postgres", "Algolia"],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: "Modo Escuro"
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: "Paginação Inteligente"
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: "Filtragem Avançada"
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: "Tema Escuro para Mobile"
          },
          {
            img: "/images/adidas-project-overview5.png",
            title: "Sistema de Busca Mobile"
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: "Modal para Menu Mobile"
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: "Sistema de busca persistido na URL do navegador"
          }
        ],
        "url": "clone-de-pesquisa-ecommerce-adidas",
        "content": ""
      }
    ]
  },
  {
    "language": "fr",
    "content": [
      {
        "title": "Clone de recherche Ecommerce d'Adidas",
        "description": "Un projet full stack développé et déployé. Avec une stack diversifiée, je me suis efforcé de remplir toutes les fonctions de l’e‑commerce original.",
        "status": "Terminé",
        "website": "https://ecommerce-search-clone-adidas.onrender.com/us/search",
        "source": "https://github.com/aleltl1xdvcr/Ecommerce-Search-Clone-Adidas",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Framer Motion", "Splide", "Redis", "Render", "Postgres", "Algolia"],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: "Mode Sombre"
          },
          {
            img: "/images/adidas-project-overview2.png",
            title: "Pagination Intelligente"
          },
          {
            img: "/images/adidas-project-overview3.png",
            title: "Filtrage Avancé"
          },
          {
            img: "/images/adidas-project-overview4.png",
            title: "Thème Sombre Mobile"
          },
          {
            img: "/images/adidas-project-overview5.png",
            title: "Système de Recherche Mobile"
          },
          {
            img: "/images/adidas-project-overview6.png",
            title: "Fenêtre Modale pour le Menu Mobile"
          },
          {
            img: "/images/adidas-project-overview7.png",
            title: "Système de recherche persistant dans l’URL du navigateur"
          }
        ]
,
        "url": "clone-de-recherche-ecommerce-adidas",
        "content": ""
      }
    ]
  },
  {
    "language": "es",
    "content": [
      {
        "title": "Clon de Langing Page de Tesla",
        "description": "Un proyecto únicamente Frontend para demostrar mis habilidades creando una copia funcional de la página principal del sitio web Tesla.com",
        "status": "Completado",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", 'Frammer Motion', 'Splide'],        
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: 'Modo oscuro'
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: 'Carrusel Automático'
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: 'Carrusel Fluido'
          }, {
            img: "/images/tesla-project-overview5.png",
            title: ''
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ''
          },
          ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      },
    ]
  },
  {
    "language": "en",
    "content": [
      {
        "title": "Tesla Landing Page Clone",
        "description": "A frontend-only project to showcase my skills by creating a functional copy of the Tesla.com homepage",
        "status": "Completed",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: "Dark Mode"
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: "Automatic Carousel"
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: "Smooth Carousel"
          },
          {
            img: "/images/tesla-project-overview5.png",
            title: ""
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ""
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  },
  {
    "language": "de",
    "content": [
      {
        "title": "Klon der Tesla-Landingpage",
        "description": "Ein reines Frontend-Projekt, um meine Fähigkeiten bei der Erstellung einer funktionalen Kopie der Hauptseite von Tesla.com zu demonstrieren",
        "status": "Abgeschlossen",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: "Dunkler Modus"
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: "Automatischer Karussell"
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: "Sanfter Karussell"
          },
          {
            img: "/images/tesla-project-overview5.png",
            title: ""
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ""
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  },
  {
    "language": "ko",
    "content": [
      {
        "title": "테슬라 랜딩 페이지 클론",
        "description": "Tesla.com 홈페이지의 기능적인 복사본을 제작하여 프론트엔드 역량을 보여주는 프로젝트입니다",
        "status": "완료됨",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/adidas-project-overview1.png",
            title: 'A'
          },
          {
            img: "/images/adidas-project-overview1.png",
            title: 'B'
          },
          {
            img: "/images/adidas-project-overview1.png",
            title: 'C'
          },
          {
            img: "/images/adidas-project-overview1.png",
            title: 'D'
          }, {
            img: "/images/adidas-project-overview1.png",
            title: 'E'
          },
          {
            img: "/images/adidas-project-overview1.png",
            title: 'F'
          },
          {
            img: "/images/adidas-project-overview1.png",
            title: 'G'
          }],        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  },
  {
    "language": "fr",
    "content": [
      {
        "title": "Clone de la page d'accueil de Tesla",
        "description": "Un projet purement frontend pour démontrer mes compétences en créant une copie fonctionnelle de la page d'accueil du site Tesla.com",
        "status": "Terminé",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: "Mode Sombre"
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: "Carrousel Automatique"
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: "Carrousel Fluide"
          },
          {
            img: "/images/tesla-project-overview5.png",
            title: ""
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ""
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  },
  {
    "language": "ja",
    "content": [
      {
        "title": "テスラのランディングページのクローン",
        "description": "Tesla.com のホームページを機能的に再現することで、自分のフロントエンドスキルを示すためのプロジェクトです",
        "status": "完了",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: "ダークモード"
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: "自動カルーセル"
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: "スムーズカルーセル"
          },
          {
            img: "/images/tesla-project-overview5.png",
            title: ""
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ""
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  },
  {
    "language": "pt",
    "content": [
      {
        "title": "Clone da Landing Page da Tesla",
        "description": "Um projeto apenas Frontend para demonstrar minhas habilidades criando uma cópia funcional da página inicial do site Tesla.com",
        "status": "Concluído",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: "Modo Escuro"
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: "Carrossel Automático"
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: "Carrossel Suave"
          },
          {
            img: "/images/tesla-project-overview5.png",
            title: ""
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ""
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  },
  {
    "language": "ru",
    "content": [
      {
        "title": "Клон лендинга Tesla",
        "description": "Проект только на фронтенде, чтобы продемонстрировать мои навыки, создав функциональную копию главной страницы сайта Tesla.com",
        "status": "Завершено",
        "website": "https://aleltl1xdvcr.github.io/Tesla-Clone/",
        "source": "https://github.com/aleltl1xdvcr/Tesla-Clone",
        "stack": ["React", "Next.js", "Tailwind", "Zustand", "Frammer Motion", "Splide"],
        "items": [
          {
            img: "/images/tesla-project-overview1.png",
            title: "Темный режим"
          },
          {
            img: "/images/tesla-project-overview3.png",
            title: "Автоматическая карусель"
          },
          {
            img: "/images/tesla-project-overview4.png",
            title: "Плавная карусель"
          },
          {
            img: "/images/tesla-project-overview5.png",
            title: ""
          },
          {
            img: "/images/tesla-project-overview6.png",
            title: ""
          }
        ],
        "url": "clon-de-landing-page-de-tesla",
        "content": ""
      }
    ]
  }
]

export const profile = [
  {
    "language": "es",
    "content": `
      Soy diseñador/a de experiencia de usuario (UX/UI) con más de 5 años de experiencia trabajando con equipos multidisciplinarios para crear soluciones digitales que mejoren la interacción de los usuarios con las marcas. Mi carrera comenzó en el mundo del desarrollo web, pero pronto me di cuenta de que mi verdadera pasión era hacer que las interfaces fueran intuitivas y agradables para los usuarios.
      A lo largo de los años, he trabajado en diversos sectores, desde la moda hasta la tecnología, siempre con el objetivo de proporcionar experiencias digitales excepcionales. Mi enfoque está siempre en el usuario, buscando un diseño funcional pero estéticamente atractivo que resuelva problemas reales. Me considero una persona empática, con una gran capacidad de adaptación y trabajo en equipo, lo que me ha permitido colaborar con profesionales de diferentes áreas, como desarrolladores, product managers y analistas de datos.
    `
  },
  {
    "language": "en",
    "content": `
      I am a UX/UI designer with over 5 years of experience working with multidisciplinary teams to create digital solutions that enhance user-brand interactions. My career started in web development, but I quickly realized my true passion was making interfaces intuitive and enjoyable for users.
      
      Over the years, I have worked across various sectors, from fashion to technology, always with the goal of providing exceptional digital experiences. My focus is always on the user, seeking functional yet aesthetically pleasing designs that solve real problems. I consider myself an empathetic person with strong adaptability and teamwork skills, which have allowed me to collaborate with professionals from various fields such as developers, product managers, and data analysts.
    `
  },
  {
    "language": "de",
    "content": `
      Ich bin UX/UI-Designerin und arbeite seit über fünf Jahren mit multidisziplinären Teams an digitalen Lösungen, die die Interaktion zwischen Nutzern und Marken verbessern. Meine Karriere begann in der Webentwicklung, doch schnell erkannte ich, dass meine wahre Leidenschaft darin liegt, intuitive und benutzerfreundliche Oberflächen zu gestalten.
      
      Im Laufe der Jahre habe ich in verschiedenen Branchen gearbeitet, von Mode bis Technologie, immer mit dem Ziel, außergewöhnliche digitale Erlebnisse zu schaffen. Mein Fokus liegt stets auf dem Nutzer und ich suche nach funktionalen und zugleich ästhetisch ansprechenden Designs, die echte Probleme lösen. Ich halte mich für eine einfühlsame Person mit ausgeprägter Anpassungsfähigkeit und Teamfähigkeit, was mir die Zusammenarbeit mit Fachleuten aus verschiedenen Bereichen wie Entwicklern, Produktmanagern und Datenanalysten ermöglicht hat.
    `
  },
  {
    "language": "fr",
    "content": `
      Je suis designer UX/UI et j'ai plus de 5 ans d"expérience au sein d"équipes pluridisciplinaires pour créer des solutions numériques qui optimisent les interactions entre les utilisateurs et les marques. j'ai débuté ma carrière dans le développement web, mais j'ai rapidement réalisé que ma véritable passion était de créer des interfaces intuitives et agréables pour les utilisateurs.
      
      Au fil des ans, j'ai travaillé dans divers secteurs, de la mode à la technologie, avec pour objectif de proposer des expériences numériques exceptionnelles. l'utilisateur est toujours au centre de mes préoccupations, recherchant des designs à la fois fonctionnels et esthétiques qui résolvent des problèmes concrets. Je me considère comme une personne empathique, dotée d"une grande adaptabilité et d"un excellent esprit d"équipe, ce qui m"a permis de collaborer avec des professionnels de divers domaines, tels que des développeurs, des chefs de produit et des analystes de données.
    `
  },
  {
    "language": "ja",
    "content": `
      私はUX/UIデザイナーとして、5年以上にわたり、多分野にわたるチームと連携し、ユーザーとブランドのインタラクションを強化するデジタルソリューションの開発に携わってきました。Web開発からキャリアをスタートしましたが、すぐに真の情熱は、ユーザーにとって直感的で快適なインターフェースを作ることにあると気づきました。
      
      長年にわたり、ファッションからテクノロジーまで、様々な分野で活躍し、常に卓越したデジタル体験を提供することを目指してきました。常にユーザーを第一に考え、機能的でありながら美しく、現実の問題を解決するデザインを追求しています。私は、高い適応力とチームワーク力を備えた共感力のある人間だと考えています。そのため、開発者、プロダクトマネージャー、データアナリストなど、様々な分野のプロフェッショナルと協働してきました。
    `
  },
  {
    "language": "pt",
    "content": `
      Sou um designer UX/UI com mais de 5 anos de experiência a trabalhar com equipas multidisciplinares para criar soluções digitais que melhoram as interações entre utilizador e marca. A minha carreira começou no desenvolvimento web, mas rapidamente percebi que a minha verdadeira paixão era criar interfaces intuitivas e agradáveis ​​para os utilizadores.
      
      Ao longo dos anos, tenho trabalhado em vários setores, desde a moda à tecnologia, sempre com o objetivo de proporcionar experiências digitais excecionais. O meu foco está sempre no utilizador, procurando designs funcionais e esteticamente agradáveis ​​que resolvam problemas reais. Considero-me uma pessoa empática, com uma forte capacidade de adaptação e de trabalho em equipa, o que me permitiu colaborar com profissionais de diversas áreas, como developers, gestores de produto e analistas de dados.
    `
  },
  {
    "language": "ru",
    "content": `
      Я UX/UI-дизайнер с более чем 5-летним опытом работы с многопрофильными командами для создания цифровых решений, которые улучшают взаимодействие пользователя с брендом. Моя карьера началась в веб-разработке, но я быстро понял, что моя истинная страсть — делать интерфейсы интуитивно понятными и приятными для пользователей.
      
      За эти годы я работал в различных секторах, от моды до технологий, всегда с целью предоставления исключительных цифровых впечатлений. Я всегда сосредоточен на пользователе, ищу функциональные, но эстетически приятные дизайны, которые решают реальные проблемы. Я считаю себя чутким человеком с сильными навыками адаптации и командной работы, что позволило мне сотрудничать с профессионалами из разных областей, такими как разработчики, менеджеры по продуктам и аналитики данных.
    `
  }
]

type ContactItem = {
  language: string;
  content: Record<string, string>;
  [key: string]: any;
};

export const contact: ContactItem[] = [
  {
    "language": "es",
    "Información de Contacto": null,
    "¡Trabajemos Juntos!": null,
    content: {
      "Correo Electrónico": 'diversebussines@gmail.com',
      Ubicación: 'México'
    }
  },
  {
    "language": "en",
    "Contact Information": null,
    "Let’s work together!": null,
    content: {
      Email: 'diversebussines@gmail.com',
      "Location": 'Mexico'
    }
  },
  {
    "language": "de",
    "Kontaktinformationen": null,
    "Lass uns zusammenarbeiten!": null,
    content: {
      "E-Mail": 'diversebussines@gmail.com',
      "Standort": 'Mexiko'
    }
  },
  {
    "language": "fr",
    "Informations de Contact": null,
    "Travaillons ensemble !": null,
    content: {
      "Courriel ": 'diversebussines@gmail.com',
      Ubicación: 'Mexique'
    }
  },
  {
    "language": "ja",
    "連絡先情報": null,
    "一緒に働きましょう！": null,
    content: {
      "電子メール": 'diversebussines@gmail.com',
      "位置": 'メキシコ'
    }
  },
  {
    "language": "pt",
    "Informações de Contato": null,
    "Vamos trabalhar juntos!": null,
    content: {
      "E-mail": 'diversebussines@gmail.com',
      "Localização": 'México'
    }
  },
  {
    "language": "ru",
    "Контактная информация": null,
    "Давайте работать вместе!": null,
    content: {
      "Электронная почта": 'diversebussines@gmail.com',
      "Местоположение ": 'Мексика '
    }
  }
]