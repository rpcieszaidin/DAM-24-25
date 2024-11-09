import { Config } from "../../config/Config";
import { Http } from "./Http";
import { HttpAxios } from "./HttpAxios";
import { HttpFetch } from "./HttpFetch";

export class HttpFactory {
    static build() : Http {
        switch(Config.moviesAPI.type) {
            case "fetch":
                return new HttpFetch(Config.moviesAPI) as Http;
            case "axios":
                return new HttpAxios(Config.moviesAPI) as Http;
            default:
                return new HttpFetch(Config.moviesAPI) as Http;
        }
    }
}