import { Config } from "../../config/Config";
import { Http, IFilms } from "./Http";
import { HttpAxios } from "./HttpAxios";
import { HttpFetch } from "./HttpFetch";

export class HttpFactory2 {
    static build() : IFilms {
        switch(Config.moviesAPI.type) {
            case "fetch":
                return new HttpFetch(Config.moviesAPI);
            case "axios":
                return new HttpAxios(Config.moviesAPI);
            default:
                return new HttpFetch(Config.moviesAPI);
        }
    }
}