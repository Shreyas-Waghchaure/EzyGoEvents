import axios from "axios";
let baseUrl = "http://localhost:8080"


class AuthService{


    signUp(details){
        return axios.post(baseUrl+"/user/signup",details);
    }

    signIn(details){
        return axios.post(baseUrl+"/user/signin",details);
    }
}


export default new AuthService;