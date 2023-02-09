import CardProyect from "./ModelCard/CardModelProyect";

const CardFrontend = ({ showCards,image,text,title,href}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 transition ease-in-out ${
        showCards === "all" || showCards === "fronted" ? "block" : "hidden"
      }`}
    >
      <CardProyect image={image} text={text} title={title} href={href}/>
    </div>
  );
};

export default CardFrontend;
