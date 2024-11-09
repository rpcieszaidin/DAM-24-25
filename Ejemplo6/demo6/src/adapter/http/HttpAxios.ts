import axios from "axios";
import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";


export class HttpAxios extends Http {
    async getFilms(route: string): Promise<MoviesResponse | HttpError> {
        try {
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}