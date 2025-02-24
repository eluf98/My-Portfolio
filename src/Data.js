import reactPng from "./assets/react.png";
import reduxPng from "./assets/redux.png";
import js from "./assets/js.png";
import node from "./assets/node.png";
import figma from "./assets/figma.png";
import vscode from "./assets/vscode.png";
import witflix from "./assets/witflix.png";
import pizza from "./assets/pizza.png";

export const TURKISH = "turkish";
export const ENGLISH = "english";

export const skillIcons = [
  {
    icon: js,
    boxColor: "border-yellow-400",
    tcClass: "border-solid border-[5rem] w-[5%] rounded-[0.5rem]",
    title: "JAVASCRIPT",
  },
  {
    icon: reactPng,
    boxColor: "border-black",
    tcClass: "border-solid border-[5rem]  w-[5%] rounded-[0.5rem]",
    title: "REACT",
  },
  {
    icon: reduxPng,
    boxColor: "border-purple-700",
    tcClass: "border-solid border-[5rem] w-[5%] rounded-[0.5rem]",
    title: "REDUX",
  },
  {
    icon: node,
    boxColor: "border-black",
    tcClass: "border-solid border-[5rem] w-[5%] rounded-[0.5rem]",
    title: "NODE",
  },
  {
    icon: vscode,
    boxColor: "border-blue-500",
    tcClass: "border-solid border-[5rem] w-[5%] rounded-[0.5rem]",
    title: "VSCODE",
  },
  {
    icon: figma,
    boxColor: "border-black",
    tcClass: "border-solid border-[5rem] w-[5%] rounded-[0.5rem]",
    title: "FIGMA",
  },
];
export const projectsInformation = [
    {
      projectImg: witflix,
      turkishTitle: "Witflix Projesi",
      englishTitle: "Witflix Project",
      turkishDescription:
        "Full-Stack Developer eğitiminin 1.ayında temel html ve css teknikleri ile Netflixin ana sayfasının şablon tasarımı yapılmıştır.",
      englishDescription:
        "In the 1st month of the Full-Stack Developer training, the template design of Netflix's home page was made using basic HTML and CSS techniques.",
      structures: ["html", "css"],
      github: "https://github.com/eluf98/WitFlix.gitg",
      app: "",
      turkishLaptopPos: "translate-x-[-1.5rem] translate-y-[4.35rem] ",
      turkishImgPos: "translate-x-[3.95rem] translate-y-[3.24rem] ",
      englishLaptopPos: "translate-x-[-1.5rem] translate-y-[4.35rem] ",
      englishImgPos: "translate-x-[3.95rem] translate-y-[3.24rem] ",
    },
    {
      projectImg: pizza,
      turkishTitle: "Pizza Sipariş Projesi",
      englishTitle: "Pizza Order Project",
      turkishDescription:
        "Axios kullanılan, React ile komponent yapısının kullanıldığı, routing işlemleri ile sayfa geçişlerinin olduğu, state yapısı ile dataların taşındığı bir pizza sipariş projesidir.",
      englishDescription:
        "It is a project in which Axios is used, component structure is used with React, page transitions are made with routing operations, and data is moved with the state structure.",
      structures: ["html", "css", "react", "reactstrap", "cypress", "axios"],
      github: "https://github.com/eluf98/s8-pizza-challange.git",
      app: "",
      turkishLaptopPos: "translate-x-[-1.5rem] translate-y-[-0.4rem]",
      turkishImgPos: "translate-x-[3.95rem] translate-y-[-1.5rem]",
      englishLaptopPos: "translate-x-[-1.5rem] translate-y-[-0.4rem]",
      englishImgPos: "translate-x-[3.95rem] translate-y-[-1.5rem]",
    },
];
export const toggleLanguages = {
    turkishDark: "KARANLIK MOD",
    turkishLight: "AYDINLIK MOD",
    englishDark: "DARK MODE",
    englishLight: "LIGHT MODE",
  };
  
  export const languageArea = {
    turkish: "INGILIZCE",
    suffixTurkish: "'YE GEÇ",
    english: "TURKISH",
    prefixEnglish: "SWITCH TO ",
  };
  
  export const introductionHello = {
    turkish: "Merhaba! 👋",
    english: "Hello! 👋",
  };
  
  export const introductionDescription = {
    turkish:
      "Ben Elif Gündoğan. Ben Full-Stack Developerım. Sağlam ve ölçeklenebilir ön uç ürünler üretebilirim. Hadi tanışalım!",
    english:
      "I'm Elif Gündoğan. I'm a Full-Stack Developer. I can craft solid and scalable frontend products. Let's meet!",
  };
  
  export const introductionBottomDescription = {
    turkishFirst: "Şuanda ",
    englishFirst: "I am currently working as a ",
    turkishSecond: " olarak ",
    englishSecond: " as a ",
    turkishFinal: "Beni takımına katılmam için davet et - ",
    englishFinal: "Invite me to join your team - ",
  };
  
  export const skillsTitle = {
    turkish: "Yetenekler",
    english: "Skills",
  };
  
  export const profileLanguage = {
    turkishTitle: "Profil",
    englishTitle: "Profile",
    turkishBasicInfo: "Temel Bilgiler",
    englishBasicInfo: "Basic Information",
    turkishBirthDate: "Doğum tarihi",
    englishBirthDate: "Birth Date",
    turkishCityOfResidence: "İkamet Şehri",
    englishCityOfResidence: "City",
    turkishEducation: "Eğitim Durumu",
    englishEducation: "Education",
    turkishPreferredRole: "Tercih ettiği rol",
    englishPreferredRole: "Preferred Role",
    turkishAboutMe: "Hakkımda",
    englishAboutMe: "About me",
    turkishIst: "İstanbul",
    englishIst: "Istanbul",
    turkishUni:
      "Sakarya Üniversitesi Elektrik Elektronik Mühendisliği Lisans, 2022",
    englishUni:
      "Sakarya Univ. Electirical and Electronics Engineering Undergraduate, 2022",
    turkishAboutMeFirstPartDescp:
      "2 yıla yakın full-stack developer tecrübem var. ",
    turkishAboutMeSecondPartDescp: "Polity",
    turkishAboutMeThirdPartDescp:
      " Şimdi ise Full-Stack Developer olarak kendimi her geçen gün geliştiriyorum.",
    turkishAboutMeFinalPartDescp:
      "Full-Stack Developer  olarak da 3 projem bulunmaktadır. Bunlar, WitFlix, Pizza Sipariş Sitesi ve CV sitesidir.",
    englishAbouteMeFirstDescp:
      "I have nearly 2 years of full-stack developer experience.",
    englishAbouteMeSecondDescp: "Polity, ",
    englishAbouteMeThirdDescp:
      "Now, as a Full-Stack Developer, I improve myself every day.",
    englishAbouteMeFinalDescp:
      "I have 3 projects as a Full-Stack Developer. These are WitFlix, Pizza Ordering Site and CV site.",
  };
  
  export const footerDescp = {
    turkish: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    english: "Let's work together on your next product.",
  };
  
  export const projectsArea = {
    turkishTitle: "Projeler",
    englishTitle: "Projects",
    turkishGithub: "Github'da Görüntüle",
    englishGithub: "View on Github",
    turkishApp: "Uygulamaya Git",
    englishApp: "Go to App",
  };
  
  export const user = {
    id: Math.floor(Math.random() * 10),
    name: "Elif Gündoğan",
    year: 1998,
    color: "#30D5C8",
    pantone_value: "",
  };