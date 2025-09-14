import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice"

export const store=configureStore({
    reducer:{
        users:userReducer,
        modal:modalReducer,
        search:searchReducer
    }
})

