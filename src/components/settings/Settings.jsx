// import redux set estado

import { useDispatch,useSelector } from "react-redux";
import { setBackground } from "../../reducers/Background/backgroundSlice";
import { setTheme } from "../../reducers/Theme/settings/themeSlice";

import img1 from "../../assets/Bg-Home/img-dark-theme.jpg";
import img2 from "../../assets/Bg-Home/img-ligth-theme.jpg";

const Settings = ({ modalIsOpen, children }) => {
  const dispatch = useDispatch();
   //thema
   const {themeColor} = useSelector(state =>  state.theme)

  return (
    <>
      {modalIsOpen && (
        <div className="relative flex justify-center z-30">
          <div
            x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            className="fixed inset-0 z-10 overflow-y-hidden"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center  px-4 sm:pt-4 pt-16 pb-20 text-right sm:block sm:px-10 bg-transparent">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className={`relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform ${themeColor} rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle`}>
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Configuracion
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Aqui puedes elegir temas para personalizar el sitio
                </p>

                <form className="mt-4" action="#">
                  <h2 className="text-sm text-gray-700 dark:text-gray-200">
                    Temas
                  </h2>

                  <div className="block mt-3">
                    <div className={`flex justify-evenly w-full px-4 py-2 text-sm text-gray-700  border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300`}>
                      <button
                        onClick={() => {
                          dispatch(
                            setTheme({
                              themeColor: "bg-white",
                            })
                          );
                        }}
                        className="w-10 bg-white border border-black h-10 rounded-full hover:scale-105"
                      ></button>
                      <button 
                       onClick={()=>{
                        dispatch(setTheme({
                          themeColor:'bg-fuchsia-500'
                        }))
                      }}
                      className="w-10 bg-fuchsia-500 border border-black h-10 rounded-full hover:scale-105"></button>
                      <button 
                       onClick={()=>{
                        dispatch(setTheme({
                          themeColor:'bg-violet-400'
                        }))
                      }}
                      className="w-10 bg-violet-400 border border-black h-10 rounded-full hover:scale-105"></button>
                      <button 
                       onClick={()=>{
                        dispatch(setTheme({
                          themeColor:'bg-yellow-400'
                        }))
                      }}
                      className="w-10 bg-yellow-400 h-10 border border-black rounded-full hover:scale-105"></button>
                      <button 
                       onClick={()=>{
                        dispatch(setTheme({
                          themeColor:'bg-blue-500'
                        }))
                      }}
                      className="w-10 bg-blue-500 h-10 border border-black rounded-full hover:scale-105"></button>
                    </div>
                  </div>

                  <h2 className="text-sm mt-4 text-gray-700 dark:text-gray-200">
                    Imagen de fondo
                  </h2>
                  <div className="block mt-3">
                    <div className={`flex gap-1  w-full px-4 py-3 text-sm text-gray-700 ${themeColor} border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300`}>
                      <button
                        onClick={() => {
                          dispatch(
                            setBackground({
                              bg_home: "bg-[url(./assets/Bg-Home/img-dark-theme-df1a65cf.jpg)]",
                            })
                          );
                        }}
                        className="w-1/2 hover:scale-105"
                      >
                        <img src={img1} alt="" className="w-full px-[0.1rem]" />
                      </button>
                      <button
                        onClick={() => {
                          dispatch(
                            setBackground({
                              bg_home: "bg-[url(./assets/Bg-Home/img-ligth-theme-6a3d94e3.jpg)]",
                            })
                          );
                        }}
                        className="w-1/2 hover:scale-105"
                      >
                        <img src={img2} alt="" className="p-[0.2rem]" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    {children}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
