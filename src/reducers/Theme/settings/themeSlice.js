import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    themeColor: 'bg-white'
}


export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme: ( state,action)=>{
            state.themeColor = action.payload.themeColor
        }
    }
})


 export const {setTheme} = themeSlice.actions

export default themeSlice.reducer