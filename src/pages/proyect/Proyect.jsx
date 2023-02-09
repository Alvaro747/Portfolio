import { useState } from "react";
import CardBackend from "../../components/cardsProyects/CardBackend";
import CardFrontend from "../../components/cardsProyects/CardsFrontend";

// import img proyects 

import imgPorfolio from '../../assets/Proyects/portfolio.png'
import imgFace from '../../assets/Proyects/face.png'
import imgCitas from '../../assets/Proyects/Citas.jpg'
import imgMusic from '../../assets/Proyects/Music.jpg'



//Redux 

import { useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const Proyect = () => {
  const [showCards, setShowCards] = useState("all");

  const activeclassNamees = "bg-blue-600 text-white dark:bg-green-300 dark:text-black ";

  const inactiveclassNamees =
    "text-body-color hover:bg-blue-600 dark:hover:bg-green-300 dark:hover:text-black hover:text-white ";

  const changeShowCards = (type) => {
    setShowCards(type);
  };

  const {darkMode} = useSelector(state => state.darkMode)

    //thema
    const {themeColor} = useSelector(state =>  state.theme)

  return (
    <div className={`${darkMode}`} name={'proyect'}>
    <Layout>
      <section className={`${themeColor} dark:bg-gray-900`}>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold dark:text-gray-200">
                  Portafolio
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] dark:text-gray-200">
                 Mis Proyectos
                </h2>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <ul className="mb-12 flex flex-wrap justify-center space-x-1">
                <li className="mb-1">
                  <button
                    onClick={(e) => {
                      changeShowCards("all");
                    }}
                    className={`inline-block rounded-lg dark:text-gray-200 py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCards === "all"
                        ? activeclassNamees
                        : inactiveclassNamees
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={(e) => {
                      changeShowCards("fronted");
                    }}
                    className={`inline-block rounded-lg dark:text-gray-200 py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCards === "fronted"
                        ? activeclassNamees
                        : inactiveclassNamees
                    }`}
                  >
                    Frontend
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={(e) => {
                      changeShowCards("backend");
                    }}
                    className={`inline-block rounded-lg dark:text-gray-200 py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCards === "backend"
                        ? activeclassNamees
                        : inactiveclassNamees
                    }`}
                  >
                    Backend
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            
            <CardFrontend showCards={showCards} image={imgFace} text={'React js'} title={'Landing page'} href={'https://github.com/Alvaro747/InstituteLandingPage'}/>
            <CardBackend showCards={showCards}   image={imgCitas} text={'Node js '} title={'Agendar citas'} href={'https://github.com/Alvaro747/AgendarCitas'}/>
            <CardFrontend showCards={showCards} image={imgPorfolio} text={'React js '} title={'Portafolio'} href={'home'}/>
            <CardBackend showCards={showCards} image={imgMusic} text={'Node js '} title={'Música'} href={'https://github.com/Alvaro747/Backend_Node_Music_App'}/>
            
           
          </div>
        </div>
      </section>
    </Layout>
    </div>
  );
};

export default Proyect;
