import { createSlice } from "@reduxjs/toolkit";

const initialState={
    categories:['کالای دیجیتال','مد و پوشاک'],
    subcategories:[]
}

const productCategrySlice = createSlice({
    name:'categorie',
    initialState,
    reducers:{
        addToCategories:(state,action)=>{
            state.categories.push(action.payload)
        },
        addToSubcategories:(state,action)=>{
            state.subcategories.push(action.payload)
        }
    }
})

export default productCategrySlice.reducer;
export const {addToCategories,addToSubcategories}=productCategrySlice.actions;