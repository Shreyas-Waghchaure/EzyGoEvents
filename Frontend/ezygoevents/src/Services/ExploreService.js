import axios from "axios";
let baseUrl = "http://localhost:8080"
class ExploreService{

    getAllEvents(){
        return axios.get(baseUrl+"/events");
    }
    getById(id){
        return axios.get(baseUrl+"/events/"+id)
    }

    getByCategory(category){
        return axios.get(baseUrl+"/events/category/"+category)
    }

}

export default new ExploreService;