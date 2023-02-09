import { configureStore } from "@reduxjs/toolkit";

//Reducers

import backgrondReducer from '../reducers/Background/backgroundSlice'
import darkModeReducer from '../reducers/Theme/darkMode/darkModeSlice'
import themeReducer from '../reducers/Theme/settings/themeSlice'

export default configureStore({
    reducer:{
        backgraund : backgrondReducer,
        darkMode : darkModeReducer,
        theme: themeReducer,
    }
})