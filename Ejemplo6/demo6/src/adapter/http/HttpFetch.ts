import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    async getFilms(route : string): Promise<MoviesResponse | HttpError> {
        try {
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}`);
            const jsonData: MoviesResponse = await data.json();
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}