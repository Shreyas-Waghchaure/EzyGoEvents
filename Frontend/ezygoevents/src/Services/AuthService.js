import axios from "axios";
let baseUrl = "http://localhost:8080"


class AuthService{


    signUp(details){
        return axios.post(baseUrl+"/user/signup",details);
    }
}


export default new AuthService;