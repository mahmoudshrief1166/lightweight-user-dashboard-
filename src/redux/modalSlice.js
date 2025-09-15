import { createSlice } from "@reduxjs/toolkit";


const modalSlice=createSlice({
    name:"modal",
    initialState:{
        isModelOpen:false
    },
    reducers:{
        openModal:(state)=>{
            state.isModelOpen=true;
        },
        closeModal:(state)=>{
            state.isModelOpen=false;
        }
    }
})
export const {openModal, closeModal}=modalSlice.actions;
export default modalSlice.reducer;