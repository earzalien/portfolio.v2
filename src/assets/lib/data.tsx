import htmlicon from "../../assets/icons/htmlicon.svg";
import boostrapicon from "../../assets/icons/boostrapicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import discordapiicon from "../../assets/icons/discordapiicon.png";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import notionapiicon from "../../assets/icons/notionapiicon.jpg"
import slackapiicon from "../../assets/icons/slackapiicon.png"
import aboutmeicon from "../../assets/icons/aboutme.png"
import archiicon from "../../assets/icons/archi.png"
import gantticon from "../../assets/icons/gantt.png"
import hemangicon2 from "../../assets/img/kevin-ressegaire.png"
import cinemoodpreview from "../../assets/icons/cinemood.png"
import objectificon from "../../assets/icons/objectif.png"
import portfoliopreview from "../../assets/icons/portfolio.png"
import railpreview from "../../assets/icons/rmc04.png"
import phpicom from "../../assets/icons/php.png";
import postgresqlicon from "../../assets/icons/postgre.png";
import mysqlicon from "../../assets/icons/mysql.png";
import careerIcon from "../../assets/icons/parcours-de-carriere.png";

export const headerIntroData = {
  title: {
    fr: "Salut, je suis Kevin",
    en: "Hi, I'm Kevin",
    es: "Hola, soy Kevin",
  },
  subtitle: {
    fr: "Un Développeur Passionné",
    en: "A Passionate Developer",
    es: "Un Desarrollador Apasionado",
  },
  description: {
    fr: "",
    en: "",
    es: "",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contactez-moi", 
        en: "Contact me",
        es: "Contáctame",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets", 
        en: "My Projects",
        es: "Mis Proyectos",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: hemangicon2,
} as const;

export const projectsData = [
  {
    title: "CineMood",
    description:
      "Application web de recommandations de films réalisée dans le cadre de ma formation. Le projet met l’accent sur l’expérience utilisateur, la gestion des états, la séparation front/back et l’intégration d’APIs externes dans une architecture maintenable.",
    description_EN:
      "Movie recommendation web application built as a training project. The project emphasizes user experience, state management, front/back separation and external API integration within a maintainable architecture.",
    description_ES:
      "Aplicación web de recomendación de películas desarrollada como proyecto de formación. El proyecto pone el foco en la experiencia de usuario, la gestión de estados, la separación front/back y la integración de APIs externas.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon },
      { name: "NodeJS", icon: nodejsicon },
      { name: "ReactJS", icon: reacticon },
    ],
    image: cinemoodpreview,
    deploymenturl: "https://cinemood-ebon.vercel.app/",
    githuburl: "https://github.com/earzalien/cinemood",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },

  {
    title: "Portfolio",
    description:
      "Site portfolio personnel présentant mon parcours, mes compétences et mes projets. Développé avec une approche responsive et multilingue, il met en avant la qualité du code, l’accessibilité et l’optimisation des performances.",
    description_EN:
      "Personal portfolio website showcasing my background, skills and projects. Built with a responsive and multilingual approach, it highlights code quality, accessibility and performance optimization.",
    description_ES:
      "Sitio web de portafolio personal que presenta mi trayectoria, mis competencias y mis proyectos. Desarrollado con un enfoque responsive y multilingüe, destaca la calidad del código, la accesibilidad y el rendimiento.",
    technologies: [
      { name: "TypeScript", icon: typescripticon },
      { name: "ReactJS", icon: reacticon },
      { name: "HTML", icon: htmlicon },
      { name: "CSS", icon: cssicon },
    ],
    image: portfoliopreview,
    deploymenturl: "https://portfolio-ressegaire-kevin.vercel.app/",
    githuburl: "https://github.com/earzalien/portfolio-v2",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },

  {
    title: "RMC04",
    description:
      "Application web développée pour le club Rail Model Club 04 dans un contexte professionnel. Le projet répond à un besoin client réel, avec prise de brief, définition des fonctionnalités, développement itératif et mise en production.",
    description_EN:
      "Web application developed for the Rail Model Club 04 in a professional context. The project addresses a real client need, including brief collection, feature definition, iterative development and production deployment.",
    description_ES:
      "Aplicación web desarrollada para el Rail Model Club 04 en un contexto profesional. El proyecto responde a una necesidad real del cliente, con toma de requisitos, definición de funcionalidades, desarrollo iterativo y despliegue en producción.",
    technologies: [
      { name: "TypeScript", icon: typescripticon },
      { name: "ReactJS", icon: reacticon },
      { name: "NodeJS", icon: nodejsicon },
    ],
    image: railpreview, 
    deploymenturl: "https://rail-model-club-haute-provence.vercel.app/",
    githuburl: "https://github.com/earzalien/train-manosque",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#9ECF8C",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    fr: "Plus de projets sur GitHub",
    en: "More Projects on GitHub",
    es: "Más proyectos en GitHub",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Frontend",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: boostrapicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend",
    skills: [
      {
        title: "PHP",
        hash: "#PHP",
        icon: phpicom, 
        color: "#777BB3",
      },{
        title: "PostgreSQL",
        hash: "#PostgreSQL",
        icon: postgresqlicon, 
        color: "#336791",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#00758F",
      },
            {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "API",
    skills: [
      {
        title: "Discord API",
        hash: "#Discord API",
        icon: discordapiicon,
        color: "#21759B",
      },
      {
        title: "Notion API",
        hash: "#Notion API",
        icon: notionapiicon,
        color: "#7AB55C",
      },
      {
        title: "Slack API",
        hash: "#Slack API",
        icon: slackapiicon,
        color: "#4353FF",
      },
    ],
  },
] as const;


export const navLinks = [
  { fr: "Accueil", en: "Home", es: "Inicio", hash: "/#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", es: "Habilidades", hash: "/#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", es: "Proyectos", hash: "/#projects", icon: GoProject },
  { fr: "À propos de moi", en: "About me", es: "Sobre mí", hash: "/#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", es: "Contacto", hash: "/#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "Mentions légales", en: "Imprint", es: "Aviso legal", hash: "#imprint", data: <Imprint /> },
  { fr: "Politique de confidentialité", en: "Privacy", es: "Política de privacidad", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightText = {
  fr: "Disponible pour de nouveaux projets",
  en: "Open to new projects",
  es: "Disponible para nuevos proyectos",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/kevin-ressegaire/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/earzalien",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: `/#contact`,
    icon: FiMail,
    altimgname: "mail",
  },
] as const;


export const quotesData = [
  {
    fr: `"Ce n'est pas important de réussir du premier coup. L'essentiel est de réussir au final."`,
    en: `"It's not important to succeed on the first try. The important thing is to succeed in the end."`,
    es: `"No es importante tener éxito al primer intento. Lo esencial es tener éxito al final."`,
    author: "Kevin Ressegaire",
  },
  {
    fr: `"Le web est comme une toile, et le code est la peinture. Crée ton chef-d'œuvre."`,
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
    es: `"La web es como un lienzo, y el código es la pintura. Crea tu obra maestra."`,
  },
] as const;

export const aboutMeData = {
  title_FR: "À propos de moi",
  title_EN: "About me",
  title_ES: "Sobre mí",

  description_FR: "Une approche du développement guidée par les contraintes, les choix et leurs conséquences",
  description_EN: "A development approach driven by constraints, trade-offs and consequences",
  description_ES: "Un enfoque del desarrollo guiado por las limitaciones, las decisiones y sus consecuencias",

  paragraphs_FR: [
  {
    title: "Responsabilité terrain & gestion de situations critiques",
    description:
      "Pendant près de vingt ans comme chef de réception dans l’hôtellerie haut de gamme, j’ai occupé une position centrale dans des environnements à forte pression. J’étais responsable de la résolution des incidents critiques, qu’ils soient techniques, humains ou organisationnels. Cette expérience m’a forgé des réflexes solides : analyse rapide, priorisation claire et décisions efficaces sous contrainte.",
    icon: careerIcon,
  },
  {
    title: "Transfert de compétences vers le développement",
    description:
      "Le développement web s’est imposé comme une continuité naturelle de ce rôle. Concevoir une application revient à structurer un système, anticiper les points de rupture et garantir sa fiabilité dans le temps. C’est ce que j’ai toujours fait, désormais avec du code plutôt qu’avec des procédures.",
    icon: aboutmeicon,
  },
  {
    title: "Posture d’équipe et influence technique",
    description:
      "En formation à la Wild Code School, j’ai naturellement pris un rôle de soutien technique au sein du groupe. Je suis régulièrement sollicité pour clarifier un raisonnement, diagnostiquer un bug ou proposer une approche plus lisible. Cette posture reflète une capacité à prendre du recul et à fluidifier le travail collectif.",
    icon: gantticon,
  },
  {
    title: "Approche d’architecture et arbitrages",
    description:
      "Je conçois des solutions simples avant de chercher à les rendre extensibles. J’évite le sur‑engineering, limite les abstractions prématurées et privilégie des choix techniques alignés avec les contraintes réelles du projet et le niveau de l’équipe.",
    icon: archiicon,
  },
  {
    title: "Projection professionnelle",
    description:
      "Je recherche aujourd’hui une opportunité — poste junior, alternance ou stage — au sein d’une équipe où je pourrai continuer à progresser techniquement tout en assumant rapidement des responsabilités transverses. Mon objectif est de m’inscrire dans des projets durables et de gagner en impact au fil du temps.",
    icon: objectificon,
  },
],

 paragraphs_EN: [
  {
    title: "On-the-ground responsibility & critical incident management",
    description:
      "For nearly twenty years as a front office manager in high-end hospitality, I held a central position in high-pressure environments. I was responsible for resolving critical incidents, whether technical, human or organizational. This experience gave me strong reflexes: fast analysis, clear prioritization and effective decision-making under constraints.",
    icon: careerIcon,
  },
  {
    title: "Transferring skills into development",
    description:
      "Web development came as a natural extension of that role. Designing an application means structuring a system, anticipating breaking points and ensuring long-term reliability. It is essentially what I have always done, now with code instead of procedures.",
    icon: aboutmeicon,
  },
  {
    title: "Team mindset and technical influence",
    description:
      "During my training at Wild Code School, I naturally took on a technical support role within the group. I am often asked to clarify reasoning, diagnose bugs or suggest more readable approaches. This reflects my ability to take a step back and keep the team’s work flowing smoothly.",
    icon: gantticon,
  },
  {
    title: "Architecture mindset and trade-offs",
    description:
      "I design solutions to be simple first, then extensible when needed. I avoid over-engineering, limit premature abstractions and favor technical choices that match real project constraints and the team’s actual level.",
    icon: archiicon,
  },
  {
    title: "Professional outlook",
    description:
      "I am currently looking for an opportunity — junior position, apprenticeship or internship — in a team where I can keep growing technically while quickly taking on cross-functional responsibilities. My goal is to contribute to long-term projects and increase my impact over time.",
    icon: objectificon,
  },
],


  paragraphs_ES: [
  {
    title: "Responsabilidad en el terreno y gestión de incidencias críticas",
    description:
      "Durante casi veinte años como jefe de recepción en la hostelería de alto nivel, ocupé una posición central en entornos de alta presión. Era responsable de resolver incidencias críticas, tanto técnicas como humanas u organizativas. Esta experiencia me ha dado reflejos sólidos: análisis rápido, priorización clara y decisiones eficaces bajo restricciones.",
    icon: careerIcon,
  },
  {
    title: "Transferencia de competencias al desarrollo",
    description:
      "El desarrollo web se impuso como una continuación natural de ese rol. Diseñar una aplicación significa estructurar un sistema, anticipar los puntos de ruptura y garantizar su fiabilidad a lo largo del tiempo. Es esencialmente lo que siempre he hecho, ahora con código en lugar de procedimientos.",
    icon: aboutmeicon,
  },
  {
    title: "Actitud de equipo e influencia técnica",
    description:
      "Durante mi formación en Wild Code School, asumí de forma natural un papel de apoyo técnico dentro del grupo. A menudo me piden que aclare un razonamiento, diagnostique un bug o proponga un enfoque más legible. Esta postura refleja mi capacidad para tomar perspectiva y facilitar el trabajo colectivo.",
    icon: gantticon,
  },
  {
    title: "Enfoque de arquitectura y decisiones",
    description:
      "Concibo soluciones que sean simples antes de hacerlas escalables. Evito el sobre‑ingeniería, limito las abstracciones prematuras y priorizo decisiones técnicas alineadas con las restricciones reales del proyecto y el nivel del equipo.",
    icon: archiicon,
  },
  {
    title: "Proyección profesional",
    description:
      "Actualmente busco una oportunidad — puesto junior, contrato de formación o prácticas — dentro de un equipo en el que pueda seguir creciendo técnicamente y asumir rápidamente responsabilidades transversales. Mi objetivo es implicarme en proyectos duraderos y aumentar mi impacto con el tiempo.",
    icon: objectificon,
  },
],
};




export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
    es: "Contacto", 
  },
  description: {
    fr: "Écrivez-moi un message et je vous répondrai rapidement.",
    en: "Write me a message and I will get back to you shortly.",
    es: "Escríbeme un mensaje y te responderé rápidamente.", 
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre nom",
        en: "Your Name",
        es: "Tu Nombre",
      },
      type: "text",
      validation: {
  fr: "Veuillez entrer votre nom",
  en: "Please fill in your name",
  es: "Por favor introduce tu nombre",
},

      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre adresse e-mail",
        en: "Your E-Mail",
        es: "Tu Email", 
      },
      type: "email",
      validation: {
        fr: "Veuillez entrer votre adresse e-mail",
        en: "Please fill in your email",
        es: "Por favor, rellene su correo electrónico", 
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Votre sujet",
        en: "Your Subject",
        es: "Tu Asunto", 
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer un sujet",
        en: "Please fill in your subject",
      es: "Por favor, rellene el asunto", 
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Votre message",
      en: "Your Message",
      es: "Tu Mensaje", 
    },
    name: "message",
    rows: 10,
    validation: {
  fr: "Veuillez entrer votre message",
  en: "Please fill in your message",
  es: "Por favor introduce tu mensaje",
},

    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyer",
      en: "Send",
      es: "Enviar",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
privacyOptIn: {
    checkbox: {
      fr: "J'accepte que Kevin Ressegaire utilise mes données personnelles (nom et adresse e-mail) pour me contacter.",
      en: "I agree that Kevin Ressegaire may use my personal data (name and e-mail address) to contact me.",
      es: "Acepto que Kevin Ressegaire utilice mis datos personales (nombre y dirección de correo electrónico) para ponerse en contacto conmigo.",
    },
    description: {
      fr: "En envoyant cette demande, vous confirmez avoir lu la politique de confidentialité.",
      en: "By submitting this request, you acknowledge that you have read the Privacy Policy.",
      es: "Al enviar esta solicitud, confirmas que has leído la política de privacidad.",
    },
  },
} as const;

export const toastMessages = {
 loadingProject: {
  fr: "🦄 Ouverture de la démo dans un nouvel onglet...",
  en: "🦄 Opening the live demo in a new tab...",
  es: "🦄 Abriendo la demo en una nueva pestaña...",
},

  successEmailSent: {
    fr: "🦄 Merci pour votre email. Je vous répondrai dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible.",
    es: "🦄 Gracias por tu email. Te responderé lo antes posible.",
  },
  failedEmailSent: {
    fr: "🦄 L'envoi de votre email n'a pas fonctionné. Veuillez réessayer plus tard ou écrire à [kevin.ressegaire@gmail.com](mailto:kevin.ressegaire@gmail.com).",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later or email [kevin.ressegaire@gmail.com](mailto:kevin.ressegaire@gmail.com).",
    es: "🦄 El envío de tu email no funcionó. Inténtalo de nuevo más tarde o escribe a [kevin.ressegaire@gmail.com](mailto:kevin.ressegaire@gmail.com).",
  },
  failedValidationName: {
    fr: "Veuillez entrer votre nom",
    en: "Please fill in your name",
    es: "Por favor introduce tu nombre",  
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
    es: "ES"  
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
