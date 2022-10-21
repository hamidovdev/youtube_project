import { service } from ".";


export default {
    getAll:()=>service.get("/shorts"),
}