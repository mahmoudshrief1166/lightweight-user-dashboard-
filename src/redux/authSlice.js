import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:localStorage.getItem("user")||'',
        token:localStorage.getItem("token")||'',
        isAuthenticated:!!localStorage.getItem("token")
    },
    reducers:{
        login:(state,action)=>{
            const {userName,password}=action.payload;
            if(userName==="admin"&&password==="123"){
                const fakeToken="someRandomToken"
                state.user=userName;
                state.token=fakeToken;
                state.isAuthenticated=true;

                localStorage.setItem("token",fakeToken);
                localStorage.setItem("user",userName);
            }else{
                throw new Error("Invalid credentials");
            }
        },
        logout:(state)=>{
            state.user='';
            state.token='';
            state.isAuthenticated=false;
            localStorage.removeItem("token");
        }
    }
});

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;