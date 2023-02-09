import { useState } from "react";

import emailjs from "@emailjs/browser";
import OkAlert from "../alert/okAlert";
import ErrorAlert from "../alert/errorAlert";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //txt error

  const [txtErrorName, setTxtErrorName] = useState("");
  const [txtErrorEmail, setTxtErrorEmail] = useState("");
  const [txtErrorMessage, setTxtErrorMessage] = useState("");

  // comprobar si en algun campo hay error

  const [isError, setIsError] = useState(false);

  //Comprobar si fue enviado
  const [isSend, setIsSend] = useState();

  //Funciones para validar inputs
  const validationName = () => {
    if (!name.length) {
      setTxtErrorName("* el campo esta vacio");
      setIsError(true);
    } else if (name.length < 3 || name.length > 30) {
      setTxtErrorName(
        "* el nombre debe tener una longitud entre 3 y 30 caracteres"
      );
      setIsError(true);
    } else {
      setTxtErrorName("");
      setIsError(false);
    }
  };
  const validationEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setTxtErrorEmail("* debe ingresar un correo valido");
      setIsError(true);
    } else {
      setTxtErrorEmail("");
      setIsError(false);
    }
  };
  const validationMessage = () => {
    if (!message.length) {
      setTxtErrorMessage("* el campo esta vacio");
      setIsError(true);
    } else if (name.length > 100) {
      setTxtErrorMessage("* el el mensaje no debe ser mayor a 100 caracteres");
      setIsError(true);
    } else {
      setTxtErrorMessage("");
      setIsError(false);
    }
  };

  

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !message.length ||
      !name.length ||
      !message.length ||
      isError === true
    ) {
      validationName();
      validationEmail();
      validationMessage();
    } else {
      emailjs.sendForm('service_r32hctg','template_0wgfaqi',e.target,'TEnV7C8xrc8vol5Xm')
    .then(response => {
      if(response.status === 200){
        setIsSend(true)
        e.target.reset()
        
      }
    })
    .catch(error => {console.error(error)
    setIsSend(false)} )
  
    setTimeout(()=>{
      setIsSend('')
    },4000)
    }

  };


  return (
    <>
    <form className={`mt-6`} onSubmit={sendEmail}>
      <div className="flex-1">
        <label className="mb-2 text-sm text-gray-600 dark:text-gray-200 flex gap-1">
          Nombre Completo <span className="text-xl text-red-600">*</span>
        </label>
        <input
          name="user_name"
          onChange={(e) => {
            e.preventDefault();
            if(isSend === false){
              e.target.value = ''
            }
            let value = e.target.value;
            setname(value);
          }}
          onBlur={validationName}
          type="text"
          placeholder="John Doe"
          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
            txtErrorName === "" ? "border-gray-200" : "border-red-500"
          } rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        <p className="px-4 text-red-700">{txtErrorName}</p>
      </div>

      <div className="flex-1 mt-6">
        <label className="mb-2 text-sm text-gray-600 dark:text-gray-200 flex gap-1">
          Correo <span className="text-xl text-red-600">*</span>
        </label>
        <input
          name="user_email"
          onChange={(e) => {
            e.preventDefault();
            let value = e.target.value;
            setEmail(value);
          }}
          onBlur={validationEmail}
          type="email"
          placeholder="johndoe@example.com"
          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
            txtErrorEmail === "" ? "border-gray-200" : "border-red-500"
          } rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        <p className="px-4 text-red-700">{txtErrorEmail}</p>
      </div>

      <div className="w-full mt-6">
        <label className=" mb-2 text-sm text-gray-600 dark:text-gray-200 flex gap-1 ">
          Mensaje <span className="text-xl text-red-600">*</span>
        </label>
        <textarea
          name="user_message"
          onChange={(e) => {
            e.preventDefault();
            let value = e.target.value;
            setMessage(value);
          }}
          onBlur={validationMessage}
          className={`block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
            txtErrorMessage === "" ? "border-gray-200" : "border-red-500 "
          } rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
          placeholder="Message"
        ></textarea>
        <p className="px-4 text-red-700">{txtErrorMessage}</p>
      </div>

      <button
        type="submit"
        className="w-1/2 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        enviar
      </button>
      <p className="px-4 text-red-700">
        {isError ? "debe diligenciar todos los campos" : ""}
      </p>
    </form>
    <div className="fixed top-24 right-3">
          {
            isSend === true &&  <OkAlert/>
          }
          {
            isSend === false &&  <ErrorAlert/>
          }
     
      
    </div>
    </>
  );
};

export default Form;
