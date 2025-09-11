import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserData=createAsyncThunk('users/fetchUserData',async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    if(response.status!==200){
        throw new Error('Failed to fetch user data');
    }
    return response.data;
})

const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserData.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        builder.addCase(fetchUserData.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        })
        builder.addCase(fetchUserData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default userSlice.reducer;