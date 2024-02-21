import axios from "axios";
let baseUrl = "http://localhost:8080"
class ImageService{
    uploadImage(){
        axios.post(baseUrl+"events/images/{eventId}",id)
    }
}