import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    darkMode:'off', //background del nav inicia blanco en su estado inicial
   /*  text:'text-gray-500'
    text_hover: '' */

}

export const navDarkModeSlice = createSlice({
    name : 'navDarkMode',
    initialState,
    reducers:{
        setNavDarkMode: (state,action)=>{
            state.darkMode = action.payload.darkMode;

        }
    }

})


export const {setNavDarkMode} = navDarkModeSlice.actions

 export default navDarkModeSlice.reducer