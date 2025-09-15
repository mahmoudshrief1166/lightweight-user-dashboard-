import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice"
import authReducer from "./authSlice";

export const store=configureStore({
    reducer:{
        users:userReducer,
        modal:modalReducer,
        auth:authReducer,
        search:searchReducer
    }
})

