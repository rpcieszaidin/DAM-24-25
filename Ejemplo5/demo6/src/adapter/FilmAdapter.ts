import { Movie } from "../config/entities/Movie";
import { movieMapper } from "../config/mapper/movieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpFetch } from "./http/HttpFetch";

export class FilmAdapter {
    static async getNowPlaying() : Promise<Movie[]> {
        const httpFetch = new HttpFetch({url: "https://api.themoviedb.org/3/movie/now_playing", key: "c76ed6d50b96d2bfc0920abaeade0be3"});
        const movies =  await httpFetch.getFilms();
        const dataMovies =  movies.results.map((item : Result ) => movieMapper(item));
        return dataMovies;
    }
}