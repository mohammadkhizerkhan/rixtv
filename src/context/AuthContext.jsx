import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {CallToast, loginService,signUpService} from '../services'
import { toast } from 'react-toastify';



const AuthContext=createContext();

const AuthProvider=({children})=>{
    const navigate=useNavigate();
    const location=useLocation();
    const localToken=JSON.parse(localStorage.getItem("login")) 
    const localUser=JSON.parse(localStorage.getItem("user")) 
    const [token,setToken]=useState(localToken?.token)
    const [user,setUser]=useState(localUser?.user )
    const [error,setError]=useState("");

    const login=async (email,password)=>{
        if(email && password !== ""){
            try {
                const response=await loginService(email,password);
                const {status,data:{encodedToken,foundUser}}=response;
                if(status===200){
                    localStorage.setItem("login",JSON.stringify({token:encodedToken}))
                    localStorage.setItem("user",JSON.stringify({user:foundUser}))
                    setToken(encodedToken)
                    setUser(foundUser)
                    CallToast("success","Logged in succesfully")
                    navigate(location?.state?.from||"/home",{replace:true});
                }
            } catch (err) {
                console.log("error in login",err)
                CallToast("error",err.message)
                setError(err);
            }
        }
    }
    const signup=async (signUpData)=>{
        
        try {
            const response=await signUpService(signUpData);
            const {status,data:{encodedToken,createdUser}}=response;
            if(status===201){
                localStorage.setItem("login",JSON.stringify({token:encodedToken}))
                localStorage.setItem("user",JSON.stringify({user:createdUser}))
                setToken(encodedToken)
                setUser(createdUser)
                CallToast("success","Signed Up succesfully")
                }
            } catch (err) {
                console.log("error in login",err)
                setError(err);
                CallToast("error",err.message)
            }
    }

    return(
        <AuthContext.Provider value={{token,login,signup,user,setToken,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext)

export {useAuth,AuthProvider}