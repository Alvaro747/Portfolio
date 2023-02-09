import NavBar from "../../components/Navigation/NavBar";

// import redux para consumir el estado del store
import { useSelector } from "react-redux";

// import img skills
import reactIcon from "../../assets/skills/reactIcon.svg";
import angularIcon from "../../assets/skills/angularIcon.svg";
import nodeIcon from "../../assets/skills/nodejsIcon.svg";
import expressIcon from "../../assets/skills/expressjs.svg";
import nestIcon from "../../assets/skills/nestIcon.svg";
import springIcon from "../../assets/skills/springIcon.svg";
import postgresqlIcon from "../../assets/skills/postgresIcon.svg";
import mongoIcon from "../../assets/skills/mongoIcon.svg";


// import bg home 

import bgLigth from '../../assets/Bg-Home/img-ligth-theme.jpg'
import bgDark from '../../assets/Bg-Home/img-dark-theme.jpg'

//import efect mouse dow
import "./styles.css";

//import type efect
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const nombre = "<ALVARO BERNAL/>";

  const icons = [
    {
      id: "1",
      icon: reactIcon,
      href: "https://reactjs.org/",
      alt: "react js",
    },
    {
      id: "2",
      icon: nodeIcon,
      href: "https://reactjs.org/",
      alt: "react js",
    },
    {
      id: "3",
      icon: expressIcon,
      href: "https://reactjs.org/",
      alt: "react js",
    },
    /* {
      id: "2",
      icon: angularIcon,
      href: "https://angular.io//",
      alt: "angular js",
    }, */
    /* {
      id: "4",
      icon: nestIcon,
      href: "https://nestjs.com/",
      alt: "nest js",
    }, */
    /* {
      id: "5",
      icon: springIcon,
      href: "https://spring.io/",
      alt: "spring boot",
    }, */
    {
      id: "6",
      icon: postgresqlIcon,
      href: "https://www.postgresql.org/",
      alt: "postgresql",
    },
    {
      id: "7",
      icon: mongoIcon,
      href: "https://www.mongodb.com/",
      alt: "mongo db",
    },
  ];

  const {bg_home} = useSelector(state => state.backgraund)

    //darkMode
    const {darkMode} = useSelector(state =>  state.darkMode)

     //thema
  const {themeColor} = useSelector(state =>  state.theme)
  

  return (
    <div name={'home'}>
      <NavBar />
      <div className={`w-full bg-center bg-cover h-[38rem] ${bg_home} ${darkMode}`} >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
          <div className="text-center">
            <div className={`text-3xl font-semibold text-white lg:text-4xl`}>
              <h1 className="dark:text-green-300 ">{nombre}</h1>
              <TypeAnimation
                sequence={["Desarrollador de software", 1000, ""]}
                deletionSpeed={60}
                speed={10}
                style={{ fontSize: "0.75em"}}
                wrapper="h1"
                repeat={Infinity}
              />
            </div>
            <button className="w-full px-5 py-2 bg-blue-600 text-white dark:text-black hover:bg-blue-500 mt-10 text-sm font-medium over:text-white text-blackh capitalize transition-colors duration-300 transform dark:bg-green-300 rounded-md lg:w-auto dark:hover:bg-violet-500">
              Go to project's
            </button>
            <div className={`${themeColor} dark:bg-gray-600 rounded-2xl h-20 w-full lg:w-[30rem] mt-14 flex p-3 justify-around`}>
              {icons.map((item) => {
                return (
                  <a
                    href={item.href}
                    target="_blank"
                    key={item.id}
                    className="block w-14"
                  >
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="hover:scale-125 transition"
                    />
                  </a>
                );
              })}
            </div>
            <div className="scroll-icon ex-1 dark:border-green-300">
              <span className="wheel"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
