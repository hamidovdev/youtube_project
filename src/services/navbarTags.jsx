import {service} from ".";

export default {
    getNavbarTag:()=>service.get("/navbartag"),
    getLogo:()=>service.get("/logo")
}