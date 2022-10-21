import { service } from ".";

export default {
    getContent:()=>service.get("/content")
}