
import { useSelector } from "react-redux"

const Layout = (props) => {
    //thema
    const {themeColor} = useSelector(state =>  state.theme)

  return (
    <div className={`px-16 dark:bg-gray-900 ${themeColor}`}>
        {props.children}
    </div>
  )
}

export default Layout