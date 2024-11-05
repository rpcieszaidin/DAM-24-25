import { MoviesResponse, Result } from "../../config/Responses/dataMovies";

interface Config {
    url : string;
    key: string;
}

export abstract class Http {
    url: string;
    key: string;

    constructor({ url, key} : Config) {
        this.url = url;
        this.key = key;
    }

    abstract getFilms() : Promise<MoviesResponse>;
}