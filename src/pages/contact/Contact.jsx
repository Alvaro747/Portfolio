import Form from "../../components/form/Form";
import Layout from "../../components/Layout/Layout";

// import redux para consumir el estado del store
import { useSelector } from "react-redux";

const Contact = () => {
  //darkMode
  const { darkMode } = useSelector((state) => state.darkMode);
    //thema
    const {themeColor} = useSelector(state =>  state.theme)

  return (
    <div className={`${darkMode}`} name={'contact'}>
    <Layout>
      <section className={`${themeColor} dark:bg-gray-900`}>
        <div className="conainer px-6  mx-auto dark:bg-gray-900">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1
                className={`text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl`}
              >
                Contacto
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 mx-2 text-blue-500 dark:text-blue-400 `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span
                    className={`mx-2 text-gray-700 truncate w-72 dark:text-gray-400 `}
                  >
                    (+57) 300-210-5164
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 mx-2 text-blue-500 dark:text-blue-400 `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span
                    className={`mx-2 text-gray-700 truncate w-72 dark:text-gray-400 `}
                  >
                    alvaro-122010@hotmail.com
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div
                className={`w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50 `}
              >
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </div>
  );
};

export default Contact;
