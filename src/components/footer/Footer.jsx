import Layout from "../Layout/Layout"
import { useSelector } from "react-redux";

const Footer = ()=>{
    //darkMode
  const { darkMode } = useSelector((state) => state.darkMode);
  //thema
  const {themeColor} = useSelector(state =>  state.theme)
    return(
        <div className={`${darkMode}`}>
        <Layout>
        <footer class={`${themeColor} dark:bg-gray-900 pt-5`}>
    <div class="container flex items-center justify-center  p-6  ">
        <p class="text-sm text-gray-600 dark:text-gray-300">© Alvaro Bernal Trujillo.</p>

    </div>
</footer>
</Layout>
</div>
    )
}

export default Footer