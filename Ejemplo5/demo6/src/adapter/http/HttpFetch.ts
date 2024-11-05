import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";

export class HttpFetch extends Http {
    async getFilms(): Promise<MoviesResponse> {
        const data = await fetch(this.url+"?api_key="+this.key);
        const jsonData: MoviesResponse = await data.json();
        return jsonData;
    }
}