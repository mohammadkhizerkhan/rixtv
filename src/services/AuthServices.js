import axios from "axios"

const loginService=(email,password)=>{
    return axios.post("api/auth/login",{
        email:email,
        password:password
    })
}
const signUpService=(signUpData)=>{
    const {firstname,lastname,email,password}=signUpData;
    return axios.post("/api/auth/signup",{
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    })
}

export {loginService,signUpService}