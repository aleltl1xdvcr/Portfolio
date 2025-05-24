'use client'

import ImgTor from "../utils/img-tor"
import { useEffect, useRef, useState } from "react"
import {useLanguageStore} from "../store"
import { useHydration } from "../useHydrated"
import { ArrowUp, ArrowUpRight } from "feather-icons-react"
import { gsap } from "gsap"

const projects = [
  {
    name: "Stalemates",
    date: "Sep, 2024",
    status: "Completed",
    website: "magedfaiz.xyz",
    source: "Source",
    description: "A full-stack chess platform using SvelteKit, WebSockets, and the Stockfish engine, featuring adjustable AI difficulty, and real-time multiplayer.",
    stack: ["SvelteKit", "WebSockets", "Stockfish"]
  },
  {
    name: "Mogz Visuals",
    date: "Jul, 2024",
    status: "Completed",
    website: "mogz.studio",
    source: "Source",
    description: "A journey through parallax effects, smooth scrolling, and creative problem-solving as we craft a cutting-edge digital presence for Juba's premier media studio.",
    stack: ["JavaScript", "CSS", "GSAP"]
  },
  {
    name: "v2",
    date: "Jun, 2024",
    status: "Completed",
    website: "magedfaiz.xyz",
    source: "Source",
    description: "The 2nd iteration of my developer portfolio documenting my journey, challenges faced, lessons learned, and growth as a software engineer, built with Next.js, Framer Motion, and Sanity CMS.",
    stack: ["Next.js", "Framer Motion", "Sanity CMS"]
  },
  {
    name: "Amigos",
    date: "Mar, 2023",
    status: "Completed",
    website: "netlify.app",
    source: "Source",
    description: "Amigos Restaurant in Juba: Savor the blend of local and global flavors at a friendly spot where every meal is a celebration of community.",
    stack: ["React", "Tailwind CSS", "Firebase"]
  },
  {
    name: "Zim",
    date: "Dec, 2022",
    status: "Completed",
    website: "Source",
    source: "Source",
    description: "An android file manager featuring a clean UI & multi-threaded processing, offering essential features like file organization, renaming, and decompression.",
    stack: ["Java", "Android SDK", "Multi-threading"]
  }
];

const home = [
  {
    language: 'es',
    content: {
      title: "I'm Alejandro, an independent full stack dev from México.",
      description: "I run a few of my own software businesses while also helping companies get their own products and ideas off the ground. Read a bit more about me."
    }
  },
  {
    language: 'en',
    content: {
      description: `I am a creative, curious person always seeking new challenges. My passion for design and technology has led me to explore the digital world from various perspectives. In addition to my professional side, I love traveling and discovering new cultures, which helps broaden my vision and enrich my work.
      
      I greatly enjoy photography and digital illustration, and I have a deep interest in artificial intelligence and how it can transform our daily interactions. In my free time, I tend to read books on personal development and leadership, and I am also an avid gamer, which allows me to disconnect while also stimulating my creativity. I always try to find a balance between work and play, believing that each of us has a unique story to tell, both through the projects we develop and our daily experiences.`
    }
  },
  {
    language: 'de',
    content: {
      description: `Ich bin ein kreativer, neugieriger Mensch und suche ständig nach neuen Herausforderungen. Meine Leidenschaft für Design und Technologie hat mich dazu gebracht, die digitale Welt aus verschiedenen Perspektiven zu erkunden. Neben meiner beruflichen Tätigkeit liebe ich es zu reisen und neue Kulturen zu entdecken, was meinen Horizont erweitert und meine Arbeit bereichert.
      
      Ich fotografiere und illustriere sehr gern und interessiere mich sehr für künstliche Intelligenz und wie sie unsere täglichen Interaktionen verändern kann. In meiner Freizeit lese ich gerne Bücher über Persönlichkeitsentwicklung und Führung und bin außerdem ein begeisterter Gamer. Das ermöglicht es mir, abzuschalten und gleichzeitig meine Kreativität anzuregen. Ich versuche stets, ein Gleichgewicht zwischen Arbeit und Freizeit zu finden, da ich davon überzeugt bin, dass jeder von uns eine einzigartige Geschichte zu erzählen hat – sowohl durch die Projekte, die wir entwickeln, als auch durch unsere täglichen Erfahrungen.`
    }
  },
  {
    language: 'fr',
    content: {
      description: `Je suis une personne créative et curieuse, toujours à la recherche de nouveaux défis. Ma passion pour le design et la technologie m'a amené à explorer le monde numérique sous différents angles. Outre mon activité professionnelle, j'aime voyager et découvrir de nouvelles cultures, ce qui m'aide à élargir ma vision et à enrichir mon travail.
      
      J'apprécie particulièrement la photographie et l'illustration numérique, et je m'intéresse particulièrement à l'intelligence artificielle et à la façon dont elle peut transformer nos interactions quotidiennes. Pendant mon temps libre, je lis des ouvrages sur le développement personnel et le leadership. Je suis également un passionné de jeux vidéo, ce qui me permet de déconnecter tout en stimulant ma créativité. J'essaie toujours de trouver un équilibre entre travail et loisirs, convaincu que chacun de nous a une histoire unique à raconter, tant à travers les projets que nous développons que nos expériences quotidiennes.`
    }
  },
  {
    language: 'ja',
    content: {
      description: `私はクリエイティブで好奇心旺盛な人間で、常に新しい挑戦を求めています。デザインとテクノロジーへの情熱が、デジタルの世界を様々な視点から探求するきっかけとなりました。仕事だけでなく、旅行や新しい文化に触れることも大好きで、それが私の視野を広げ、作品を豊かにしてくれています。
      
      写真撮影とデジタルイラストレーションをこよなく愛し、人工知能とそれが私たちの日々のコミュニケーションをどのように変えるのかにも深い関心を持っています。余暇には、自己啓発やリーダーシップに関する本を読むことが好きです。また、熱心なゲーマーでもあり、ゲームから離れながらも創造性を刺激しています。仕事と遊びのバランスを常に心がけています。開発するプロジェクトや日々の経験を通して、誰もが独自の物語を語ることができると信じています。`
    }
  },
  {
    language: 'pt',
    content: {
      description: `Sou uma pessoa criativa e curiosa, sempre em busca de novos desafios. A minha paixão pelo design e pela tecnologia levou-me a explorar o mundo digital de várias perspetivas. Para além do meu lado profissional, adoro viajar e descobrir novas culturas, o que ajuda a alargar a minha visão e a enriquecer o meu trabalho.
      
      Gosto muito de fotografia e ilustração digital e tenho um profundo interesse pela inteligência artificial e como esta pode transformar as nossas interações diárias. No meu tempo livre, costumo ler livros sobre desenvolvimento pessoal e liderança, e também sou um jogador ávido, o que me permite desligar e, ao mesmo tempo, estimular a minha criatividade. Procuro sempre encontrar um equilíbrio entre o trabalho e o lazer, acreditando que cada um de nós tem uma história única para contar, tanto através dos projetos que desenvolvemos como das nossas experiências diárias.`
    }
  },
  {
    language: 'ru',
    content: {
      description: `Я творческий, любознательный человек, всегда ищущий новые вызовы. Моя страсть к дизайну и технологиям привела меня к исследованию цифрового мира с разных точек зрения. Помимо моей профессиональной стороны, я люблю путешествовать и открывать для себя новые культуры, что помогает расширить мое видение и обогатить мою работу.
      
      Мне очень нравится фотография и цифровая иллюстрация, и я глубоко интересуюсь искусственным интеллектом и тем, как он может преобразовать наше повседневное взаимодействие. В свободное время я, как правило, читаю книги о личностном развитии и лидерстве, а также я заядлый геймер, что позволяет мне отключиться и одновременно стимулировать мое творчество. Я всегда стараюсь найти баланс между работой и игрой, веря, что у каждого из нас есть уникальная история, которую можно рассказать, как через проекты, которые мы разрабатываем, так и через наш повседневный опыт.`
    }
  }
];
 
const projects2 = [
  {
    language: 'en',
    content: [
      {
        title: "Project A: 'Revive Your Style'",
        description: "A project aimed at helping fashion brands redesign their image through an interactive and personalized website. I designed a modern, intuitive user interface with an AI-based recommendation system to suggest products according to user preferences. This project allowed me to apply my UX/UI design skills and learn more about integrating AI into e-commerce."
      },
      {
        title: "Project B: 'Green Energy for All'",
        description: "A website dedicated to promoting sustainability and renewable energy. Through this project, I designed an educational platform with interactive content that helps people understand how they can contribute to planet conservation through responsible energy decisions. It allowed me to combine web design with an important social cause."
      },
      {
        title: "Project C: 'MindFlow Meditation App'",
        description: "The creation of a mobile app for meditation and well-being, designed to guide users through personalized meditation sessions. My focus was on creating a relaxing and accessible user experience with a minimalist design that fostered concentration. It was a fantastic opportunity to work on mobile interface design and create user experiences centered around mental well-being."
      }
    ]
  },
  {
    language: 'de',
    content: [
      {
        title: "Projekt A: 'Revive Your Style'",
        description: "Ein Projekt, das Modemarken dabei unterstützt, ihr Image mithilfe einer interaktiven und personalisierten Website neu zu gestalten. Ich habe eine moderne, intuitive Benutzeroberfläche mit einem KI-basierten Empfehlungssystem entwickelt, das Produkte entsprechend den Nutzerpräferenzen vorschlägt. In diesem Projekt konnte ich meine UX/UI-Design-Kenntnisse anwenden und mehr über die Integration von KI in den E-Commerce erfahren."
      },
      {
        title: "Projekt B: 'Grüne Energie für alle'",
        description: "Eine Website zur Förderung von Nachhaltigkeit und erneuerbaren Energien. Im Rahmen dieses Projekts habe ich eine Bildungsplattform mit interaktiven Inhalten entwickelt, die Menschen zeigt, wie sie durch verantwortungsvolle Energieentscheidungen zum Umweltschutz beitragen können. So konnte ich Webdesign mit einem wichtigen sozialen Anliegen verbinden."
      },
      {
        title: "Projekt C: 'MindFlow Meditations-App'",
        description: "Die Entwicklung einer mobilen App für Meditation und Wohlbefinden, die Nutzer durch personalisierte Meditationssitzungen führt. Mein Fokus lag auf einer entspannenden und zugänglichen Benutzererfahrung mit minimalistischem Design, das die Konzentration fördert. Es war eine fantastische Gelegenheit, am Design mobiler Benutzeroberflächen zu arbeiten und Benutzererfahrungen zu schaffen, die das mentale Wohlbefinden in den Mittelpunkt stellen."
      }
    ]
  },
  {
    language: 'fr',
    content: [
      {
        title: "Projet A : 'Revivez votre style'",
        description: "Projet visant à aider les marques de mode à repenser leur image grâce à un site web interactif et personnalisé. J’ai conçu une interface utilisateur moderne et intuitive, dotée d’un système de recommandation basé sur l’IA, pour suggérer des produits en fonction des préférences des utilisateurs. Ce projet m’a permis de mettre à profit mes compétences en conception UX/UI et d’en apprendre davantage sur l’intégration de l’IA au e-commerce."
      },
      {
        title: "Projet B : 'Énergie verte pour tous'",
        description: "Un site web dédié à la promotion du développement durable et des énergies renouvelables. Ce projet a permis de concevoir une plateforme éducative au contenu interactif qui aide les utilisateurs à comprendre comment contribuer à la préservation de la planète par des choix énergétiques responsables. Cela m’a permis d’associer le design web à une cause sociale importante."
      },
      {
        title: "Projet C : 'Application de méditation MindFlow'",
        description: "Création d’une application mobile dédiée à la méditation et au bien-être, conçue pour guider les utilisateurs lors de séances de méditation personnalisées. Mon objectif était de créer une expérience utilisateur relaxante et accessible, avec un design minimaliste favorisant la concentration. Ce fut une formidable opportunité de travailler sur la conception d’interfaces mobiles et de créer des expériences utilisateur centrées sur le bien-être mental."
      }
    ]
  },
  {
    language: 'ja',
    content: [
      {
        title: "プロジェクトA：「Revive Your Style」",
        description: "インタラクティブでパーソナライズされたウェブサイトを通じて、ファッションブランドのイメージ刷新を支援するプロジェクトです。私は、ユーザーの好みに合わせて商品を提案するAIベースのレコメンデーションシステムを搭載した、モダンで直感的なユーザーインターフェースを設計しました。このプロジェクトを通して、UX/UIデザインのスキルを活かし、AIをeコマースに統合する方法を学ぶことができました。"
      },
      {
        title: "プロジェクトB：「Green Energy for All」",
        description: "持続可能性と再生可能エネルギーの促進に特化したウェブサイトです。このプロジェクトを通して、私はインタラクティブなコンテンツを備えた教育プラットフォームを設計しました。このプラットフォームは、責任あるエネルギー選択を通じて地球環境保護にどのように貢献できるかを人々に理解してもらうためのものです。これにより、ウェブデザインと重要な社会貢献活動を組み合わせることができました。"
      },
      {
        title: "プロジェクトC：「MindFlow瞑想アプリ」",
        description: "瞑想とウェルビーイングのためのモバイルアプリの開発。パーソナライズされた瞑想セッションをユーザーに案内するように設計されています。集中力を高めるミニマルなデザインで、リラックスして利用しやすいユーザーエクスペリエンスを提供することに注力しました。モバイルインターフェースデザインに携わり、メンタルヘルスを中心としたユーザーエクスペリエンスを創造する素晴らしい機会となりました。"
      }
    ]
  },
  {
    language: 'pt',
    content: [
      {
        title: "Projeto A: 'Revive o teu estilo'",
        description: "Um projeto que pretende ajudar as marcas de moda a redesenhar a sua imagem através de um website interativo e personalizado. Desenhei uma interface de utilizador moderna e intuitiva com um sistema de recomendação baseado em IA para sugerir produtos de acordo com as preferências do utilizador. Este projeto permitiu-me aplicar as minhas competências de design de UX/UI e aprender mais sobre a integração de IA no comércio eletrónico."
      },
      {
        title: "Projeto B: 'Energia Verde para Todos'",
        description: "Um site dedicado à promoção da sustentabilidade e das energias renováveis. Através deste projeto, criei uma plataforma educativa com conteúdo interativo que ajuda as pessoas a compreender como podem contribuir para a conservação do planeta através de decisões energéticas responsáveis. Permitiu-me combinar o web design com uma causa social importante."
      },
      {
        title: "Projeto C: 'Aplicação de Meditação MindFlow'",
        description: "A criação de uma aplicação móvel para meditação e bem-estar, concebida para guiar os utilizadores através de sessões de meditação personalizadas. O meu foco foi criar uma experiência de utilizador relaxante e acessível com um design minimalista que estimulasse a concentração. Foi uma oportunidade fantástica para trabalhar no design de interfaces móveis e criar experiências de utilizador centradas no bem-estar mental."
      }
    ]
  },
  {
    language: 'ru',
    content: [
      {
        title: "Проект A: 'Возроди свой стиль'",
        description: "Проект, направленный на помощь модным брендам в изменении своего имиджа с помощью интерактивного и персонализированного веб-сайта. Я разработал современный интуитивно понятный пользовательский интерфейс с системой рекомендаций на основе ИИ, которая будет предлагать продукты в соответствии с предпочтениями пользователя. Этот проект позволил мне применить свои навыки дизайна UX/UI и узнать больше об интеграции ИИ в электронную коммерцию."
      },
      {
        title: "Проект B: 'Зеленая энергия для всех'",
        description: "Веб-сайт, посвященный продвижению устойчивости и возобновляемой энергии. В рамках этого проекта я разработал образовательную платформу с интерактивным контентом, которая помогает людям понять, как они могут внести свой вклад в сохранение планеты с помощью ответственных энергетических решений. Это позволило мне объединить веб-дизайн с важным социальным делом."
      },
      {
        title: "Проект C: 'Приложение для медитации MindFlow'",
        description: "Создание мобильного приложения для медитации и благополучия, предназначенного для руководства пользователями через персонализированные сеансы медитации. Я сосредоточился на создании расслабляющего и доступного пользовательского опыта с минималистичным дизайном, который способствовал концентрации. Это была фантастическая возможность поработать над дизайном мобильного интерфейса и создать пользовательский опыт, сосредоточенный на психическом благополучии."
      }
    ]
  }
];

const profile = [
  {
    language: 'es',
    content: `
      Soy diseñador/a de experiencia de usuario (UX/UI) con más de 5 años de experiencia trabajando con equipos multidisciplinarios para crear soluciones digitales que mejoren la interacción de los usuarios con las marcas. Mi carrera comenzó en el mundo del desarrollo web, pero pronto me di cuenta de que mi verdadera pasión era hacer que las interfaces fueran intuitivas y agradables para los usuarios.
      A lo largo de los años, he trabajado en diversos sectores, desde la moda hasta la tecnología, siempre con el objetivo de proporcionar experiencias digitales excepcionales. Mi enfoque está siempre en el usuario, buscando un diseño funcional pero estéticamente atractivo que resuelva problemas reales. Me considero una persona empática, con una gran capacidad de adaptación y trabajo en equipo, lo que me ha permitido colaborar con profesionales de diferentes áreas, como desarrolladores, product managers y analistas de datos.
    `
  },
  {
    language: 'en',
    content: `
      I am a UX/UI designer with over 5 years of experience working with multidisciplinary teams to create digital solutions that enhance user-brand interactions. My career started in web development, but I quickly realized my true passion was making interfaces intuitive and enjoyable for users.
      
      Over the years, I have worked across various sectors, from fashion to technology, always with the goal of providing exceptional digital experiences. My focus is always on the user, seeking functional yet aesthetically pleasing designs that solve real problems. I consider myself an empathetic person with strong adaptability and teamwork skills, which have allowed me to collaborate with professionals from various fields such as developers, product managers, and data analysts.
    `
  },
  {
    language: 'de',
    content: `
      Ich bin UX/UI-Designerin und arbeite seit über fünf Jahren mit multidisziplinären Teams an digitalen Lösungen, die die Interaktion zwischen Nutzern und Marken verbessern. Meine Karriere begann in der Webentwicklung, doch schnell erkannte ich, dass meine wahre Leidenschaft darin liegt, intuitive und benutzerfreundliche Oberflächen zu gestalten.
      
      Im Laufe der Jahre habe ich in verschiedenen Branchen gearbeitet, von Mode bis Technologie, immer mit dem Ziel, außergewöhnliche digitale Erlebnisse zu schaffen. Mein Fokus liegt stets auf dem Nutzer und ich suche nach funktionalen und zugleich ästhetisch ansprechenden Designs, die echte Probleme lösen. Ich halte mich für eine einfühlsame Person mit ausgeprägter Anpassungsfähigkeit und Teamfähigkeit, was mir die Zusammenarbeit mit Fachleuten aus verschiedenen Bereichen wie Entwicklern, Produktmanagern und Datenanalysten ermöglicht hat.
    `
  },
  {
    language: 'fr',
    content: `
      Je suis designer UX/UI et j'ai plus de 5 ans d'expérience au sein d'équipes pluridisciplinaires pour créer des solutions numériques qui optimisent les interactions entre les utilisateurs et les marques. J'ai débuté ma carrière dans le développement web, mais j'ai rapidement réalisé que ma véritable passion était de créer des interfaces intuitives et agréables pour les utilisateurs.
      
      Au fil des ans, j'ai travaillé dans divers secteurs, de la mode à la technologie, avec pour objectif de proposer des expériences numériques exceptionnelles. L'utilisateur est toujours au centre de mes préoccupations, recherchant des designs à la fois fonctionnels et esthétiques qui résolvent des problèmes concrets. Je me considère comme une personne empathique, dotée d'une grande adaptabilité et d'un excellent esprit d'équipe, ce qui m'a permis de collaborer avec des professionnels de divers domaines, tels que des développeurs, des chefs de produit et des analystes de données.
    `
  },
  {
    language: 'ja',
    content: `
      私はUX/UIデザイナーとして、5年以上にわたり、多分野にわたるチームと連携し、ユーザーとブランドのインタラクションを強化するデジタルソリューションの開発に携わってきました。Web開発からキャリアをスタートしましたが、すぐに真の情熱は、ユーザーにとって直感的で快適なインターフェースを作ることにあると気づきました。
      
      長年にわたり、ファッションからテクノロジーまで、様々な分野で活躍し、常に卓越したデジタル体験を提供することを目指してきました。常にユーザーを第一に考え、機能的でありながら美しく、現実の問題を解決するデザインを追求しています。私は、高い適応力とチームワーク力を備えた共感力のある人間だと考えています。そのため、開発者、プロダクトマネージャー、データアナリストなど、様々な分野のプロフェッショナルと協働してきました。
    `
  },
  {
    language: 'pt',
    content: `
      Sou um designer UX/UI com mais de 5 anos de experiência a trabalhar com equipas multidisciplinares para criar soluções digitais que melhoram as interações entre utilizador e marca. A minha carreira começou no desenvolvimento web, mas rapidamente percebi que a minha verdadeira paixão era criar interfaces intuitivas e agradáveis ​​para os utilizadores.
      
      Ao longo dos anos, tenho trabalhado em vários setores, desde a moda à tecnologia, sempre com o objetivo de proporcionar experiências digitais excecionais. O meu foco está sempre no utilizador, procurando designs funcionais e esteticamente agradáveis ​​que resolvam problemas reais. Considero-me uma pessoa empática, com uma forte capacidade de adaptação e de trabalho em equipa, o que me permitiu colaborar com profissionais de diversas áreas, como developers, gestores de produto e analistas de dados.
    `
  },
  {
    language: 'ru',
    content: `
      Я UX/UI-дизайнер с более чем 5-летним опытом работы с многопрофильными командами для создания цифровых решений, которые улучшают взаимодействие пользователя с брендом. Моя карьера началась в веб-разработке, но я быстро понял, что моя истинная страсть — делать интерфейсы интуитивно понятными и приятными для пользователей.
      
      За эти годы я работал в различных секторах, от моды до технологий, всегда с целью предоставления исключительных цифровых впечатлений. Я всегда сосредоточен на пользователе, ищу функциональные, но эстетически приятные дизайны, которые решают реальные проблемы. Я считаю себя чутким человеком с сильными навыками адаптации и командной работы, что позволило мне сотрудничать с профессионалами из разных областей, такими как разработчики, менеджеры по продуктам и аналитики данных.
    `
  }
];

const contact = [
  {
    language: 'es',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'Correo electrónico', url: 'contacto@juanperez.com' },
      { platform: 'Teléfono', url: '+34 654 789 123' }
    ]
  },
  {
    language: 'en',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'Email', url: 'contacto@juanperez.com' },
      { platform: 'Phone', url: '+34 654 789 123' }
    ]
  },
  {
    language: 'de',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'E-Mail', url: 'contacto@juanperez.com' },
      { platform: 'Telefon', url: '+34 654 789 123' }
    ]
  },
  {
    language: 'fr',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'E-mail', url: 'contacto@juanperez.com' },
      { platform: 'Téléphone', url: '+34 654 789 123' }
    ]
  },
  {
    language: 'ja',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'Eメール', url: 'contacto@juanperez.com' },
      { platform: '電話', url: '+34 654 789 123' }
    ]
  },
  {
    language: 'pt',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'E-mail', url: 'contacto@juanperez.com' },
      { platform: 'Telefone', url: '+34 654 789 123' }
    ]
  },
  {
    language: 'ru',
    platforms: [
      { platform: 'LinkedIn', url: 'www.linkedin.com/in/juanperez' },
      { platform: 'Twitter', url: '@juanperez_design' },
      { platform: 'Instagram', url: '@juanperez_creativo' },
      { platform: 'Электронная почта', url: 'contacto@juanperez.com' },
      { platform: 'Телефон', url: '+34 654 789 123' }
    ]
  }
];

export default function Home() {
  const hoverRef = useRef(null)  

  const handleMouseEnter = () => {
    gsap.fromTo(
      hoverRef.current,
      { borderRadius: '0%', scale: 1 },  
      { borderRadius: '50%', scale: 1.1, duration: 0.4, ease: 'power2.out' }  
    )
  }

  const handleMouseLeave = () => {
    gsap.fromTo(
      hoverRef.current,
      { borderRadius: '50%', scale: 1.1 },  
      { borderRadius: '0%', scale: 1, duration: 0.4, ease: 'power2.in' }  
    )
  }

  const language = useLanguageStore((state) => state.language)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const hasHydrated = useHydration(useLanguageStore)

  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'  // Para que el scroll sea suave
    });
  }

  if (!isClient) return null  

  if (!hasHydrated) return

  return (
    <div className="mt-[100px]">
      <main
        className="flex justify-center items-center w-full">
        <div
          className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] relative"
        >
          {/* <ImgTor
            src='/images/doll.jpeg'
            alt='A doll'
            containerClass='h-[400px] relative'
            quote='a doll'
          /> */}
          
          <RenderSection key='home' name_section='home' language={language} />

          <br />

          <h1
            id="#projects"
            label="Sección 2"
            className="text-[30px]"
          >
            {
              language === 'es' ? 'Proyectos' : language === 'en' ? 'Proyects' : null
            }
          </h1>
          
              <div
                className="flex flex-col gap-y-5 mt-5"
              >
                <RenderSection language={language} name_section='projects' />
              </div>
     
          <br />
          <h1
            id="#about"
            label="Sección 3"
            className="text-[30px]"
          >
            {
              language === 'es' ? 'Sobre mí' : language === 'en' ? 'About' : null
            }
          </h1>

          <RenderSection key='about' name_section='about' language={language} />

          <br />
          <h1
            id="#contact"
            label="Sección 4"
            className="text-[30px]"
          >
            {
              language === 'es' ? 'Contacto' : language === 'en' ? 'Contact' : null
            }
          </h1>

          <RenderSection key='contact' name_section='contact' language={language} />

          <br />
          <h1
            id="#section5"
            label="Sección 5"
            className="text-[30px]"
          >
            x
          </h1>
          {
            language === 'es'
              ? 'Espanish mi amor'
              : language === 'en'
                ? <p>
                  English mi amor
                </p>
                : null
          }
        </div>
      </main>

      <div
        id="button_to_top"
        onClick={() => toTop()}
        ref={hoverRef}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        className={`circular-hover opacity-100 fixed bottom-[50px] right-[50px] hover:border-2 rounded-full p-2 duration-75 ease-out`}
      >
        <ArrowUp />
      </div>

      <footer className="">

      </footer>
    </div>
  )
}

function RenderSection({name_section, language}) {
  if (name_section === 'home') {
    return home.map((i, index) => (
      i.language === language ?
      <div
        key={`${i.title}_${index}`}
        className="flex flex-col"
      >
        <h1
          id="#home"
          className="text-[30px]"
        >
          {i?.content.title}
        </h1>
        <br />
        <div>
          <p>
            {i?.content.description}
          </p>
        </div>
      </div>
      : null
    )) 
  } else if (name_section === 'projects') {
    return projects2.map((i, index) => (
      i.language === language ?
        
          i.map((i, index) => (
            <div
              key={index}
              className="hover:inset-0 hover:bg-gradient-to-r from-white/30 to-transparent backdrop-blur-xl p-5"
            >
              <div
                className="flex flex-row items-start gap-x-5"
              >
                <div
                  className="w-3/12"
                >
                  <ImgTor
                    src='/images/creative.jpg'
                    key={index}
                    alt='x'
                    containerClass='w-full relative h-[150px]'
                  />
                </div>
                <div
                  className="w-9/12"
                >
                  <div
                    className="flex flex-row gap-x-3"
                  >
                    <h1
                      className="text-[25px] font-bold"
                    >{i.name}</h1>
                    <div
                      className="top-[13px] relative"
                    >
                      <ArrowUpRight
                        className="absolute"
                        size='20'
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-x-5"
                  >
                    <span>
                      {i.status}
                    </span>
                    <span>
                      {i.source}
                    </span>
                  </div>
                  <br />

                  <div>
                    {i.description}
                  </div>
                  <br />
                  <ol
                    className="flex flex-row items-center gap-x-3"
                  >
                    {i.stack.map((i, index) => (
                      <li
                        key={index}
                      >{i}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))
        
        : null
    ))
  } else if (name_section === 'about') {
    return profile.map((i, index) => (
      i.language === language ?
        <div
          key={`${i.content.title}_${index}`}
          className="flex flex-col"
        >
          
          <div>
            <p>
              {i?.content}
            </p>
          </div>
        </div>
        : null
    ))
  } else if (name_section === 'contact') {
    return contact.map((i, index) => (
      i.language === language ?
        <div
          key={`_${index}`}
          className="flex flex-col gap-y-5 items-start"
        >
          {i.platforms.map((i, index) => (
          <div
              key={`${i.title}_${index}`}
          className="flex flex-row items-center"
          >
            <h1
              id="#home"
              className="text-[30px]"
            >
              {i?.title}
            </h1>
            <br />
            <p>
              {i?.url}
            </p>
          </div>
          ))}
        </div>
        : null
    ))
  }
}