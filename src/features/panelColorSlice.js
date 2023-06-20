import { createSlice } from "@reduxjs/toolkit";

const initialState={
    colors:[{ name: "خاکستری", hex: "#000000" },
    { name: "نارنحی", hex: "#d4ac0d" },]
}

const panelColorsReducer=createSlice({
    name:'panelcolors',
    initialState,
    reducers:{
        addToColors:(state,action)=>{
            state.colors.push(action.payload)
        },
        removeFromColors:(state,action)=>{
            const newColors=state.colors.filter(item=>item.name!==action.payload.name)
            state.colors=newColors
        }
    }
})

export default panelColorsReducer.reducer;
export const {addToColors,removeFromColors} = panelColorsReducer.actions
