import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bg_home:'bg-[url(./assets/Bg-Home/img-ligth-theme-6a3d94e3.jpg)]'
}


export const backgroundSlice = createSlice({

    name:'background_home',
    initialState,
    reducers:{
        setBackground: (state,action) =>{
            state.bg_home = action.payload.bg_home;
        }
    }

})



export const {setBackground} = backgroundSlice.actions

export default backgroundSlice.reducer