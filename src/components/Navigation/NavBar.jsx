import React, { useState } from "react";
import { RiSettings2Line, RiSettings2Fill } from "react-icons/ri";
import Settings from "../settings/Settings";
import CustomizedSwitches from "../switchDarkMode/Switch";

//scrolll 

import { Link} from 'react-scroll'

//Redux
import { useSelector,useDispatch } from "react-redux";

import {setNavDarkMode} from '../../reducers/Theme/darkMode/darkModeSlice'


const NavBar = () => {
  // open menu mobile
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  //thema
  const {themeColor} = useSelector(state =>  state.theme)


  //open modal

  const [modalisOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalisOpen);
  };

  //darkMode
  const {darkMode} = useSelector(state =>  state.darkMode)
  const dispatch = useDispatch();

  //cambiar a darkMode

  const ChangeModeDark = () =>{
    if(darkMode !== 'dark'){
      dispatch(setNavDarkMode({
        darkMode:'dark'
      }))
    }else{
      dispatch(setNavDarkMode({
        darkMode:'off'
      }))
    }
  }

  return (
    <>
      <nav className={`fixed ${themeColor} shadow dark:bg-gray-800 w-full z-40 ${darkMode}`}>
        <div className="container px-6 py-4 mx-auto dark:bg-gray-800  ">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="#">
                <h1 className="text-4xl font-bold dark:text-gray-200">{'<AB/>'}</h1>
              </a>

              <div className="flex lg:hidden">
                <button
                  onClick={changeIsOpen}
                  type="button"
                  className={`text-gray-500  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400`}
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      x-show="isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      x-show="!isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              className={` ${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className={`flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8`}>
                <Link
                  to="home" spy={true} smooth={true} offset={50} duration={500}
                  className={`px-3 py-2 mx-3 cursor-pointer mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  Inicio
                </Link>
                <Link
                  to="about" spy={true} smooth={true} offset={50} duration={500}
                  className={`px-3 py-2 mx-3 cursor-pointer mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  sobre mi
                </Link>
                <Link
                  to="proyect" spy={true} smooth={true} offset={50} duration={500}
                  className={`px-3 py-2 mx-3 cursor-pointer mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  Proyectos
                </Link>
                <Link
                  to="contact" spy={true} smooth={true} offset={50} duration={500}
                  className={`px-3 py-2 mx-3 cursor-pointer mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  Contacto
                </Link>
              </div>

              <div className="flex   items-center mt-4 lg:mt-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    openModal();
                  }}
                  className={`mx-4 text-gray-600 ${darkMode} transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none`}
                  aria-label="show notifications"
                >
                  <div className="hover:scale-105">
                    {modalisOpen ? (
                      <RiSettings2Fill size={25} />
                    ) : (
                      <RiSettings2Line size={25} />
                    )}
                  </div>
                </button>
                <button
                  onClick={(e) => {
                    ChangeModeDark()
                  }}
                >
                  <CustomizedSwitches />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${darkMode}`}>
      <Settings modalIsOpen={modalisOpen}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            openModal();
          }}
          className={`w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide  dark:bg-green-300 dark:hover:bg-violet-500  dark:text-black text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
        >
          salir
        </button>
      </Settings>
      </div>
    </>
  );
};

export default NavBar;
