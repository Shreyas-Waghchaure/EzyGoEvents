import axios from "axios";
let baseUrl = "http://localhost:8080"
class EventService{


    createEvent(eventData){
        return axios.post(baseUrl+"/events/add",eventData)
    }

}

export default new EventService;