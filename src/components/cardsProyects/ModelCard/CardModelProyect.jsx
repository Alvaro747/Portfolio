const CardProyect = ({image,text,title,href}) =>{
    return (
        <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt="proyect"
                    className="w-full h-80 object-cover border drop-shadow-xl"
                  />
                </div>
                <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-gray-100 dark:bg-gray-600 py-9 px-3 text-center shadow-lg">
                  <span className="dark:text-gray-200 mb-2 block text-sm font-semibold">
                    {text}
                  </span>
                  <h3 className="dark:text-gray-200 mb-4 text-xl font-bold">
                    {title}
                  </h3>
                  <a
                    href={href}
                    target={'_blank'}
                    className="dark:bg-gray-50 bg-white hover:bg-blue-600 hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
                  >
                    Ver más
                  </a>
                </div>
              </div>
    )
}

export default CardProyect