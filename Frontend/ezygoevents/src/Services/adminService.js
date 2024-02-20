import axios from "axios";
let baseUrl = "http://localhost:8080"
class AdminService{

    getAllHosts(){
        return axios.get(baseUrl+"/admin/dashboard/hosts");
    }

    getAllEvents(){
        return axios.get(baseUrl+"/admin/dashboard/events")
    }

    setStatus(id){
        return axios.put(baseUrl+"/admin/dashboard/event/updateStatus/"+id)
    }

}

export default new AdminService;