import { Config } from "../config/Config";
import { Movie } from "../config/entities/Movie";
import ResultMovie from "../config/entities/ResultMovie";
import { movieMapper } from "../config/mapper/movieMapper";
import { resultMovieMapper } from "../config/mapper/resultMovieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory } from "./http/HttpFactory";
import { HttpFactory2 } from "./http/HttpFactory2";
import { HttpFetch } from "./http/HttpFetch";

interface DataMovieRequest {
    total: number;
    page: number;
}

export class FilmAdapter {

    static ROUTES = {
        nowPlaying: "/now_playing"
    }

    static async getMovies(route: string, {total, page}:DataMovieRequest): Promise<ResultMovie | null> {
        const http = HttpFactory2.build();
        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        const movies = await http.getFilms(route);
        if (movies instanceof HttpError) return null;
        const dataMovies = resultMovieMapper(movies);
        return dataMovies;
    }
}