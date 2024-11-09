import { Config } from "../config/Config";
import { Movie } from "../config/entities/Movie";
import { movieMapper } from "../config/mapper/movieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory } from "./http/HttpFactory";
import { HttpFactory2 } from "./http/HttpFactory2";
import { HttpFetch } from "./http/HttpFetch";

export class FilmAdapter {

    static ROUTES = {
        nowPlaying: "/now_playing"
    }

    static async getMovies(route: string): Promise<Movie[] | null> {
        /*

            Dos posibles factorias implementadas en HttpFactory.ts y HttpFactory2.ts
          
        */
        // const http = HttpFactory.build();
        const http = HttpFactory2.build();
        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        const movies = await http.getFilms(route);
        if (movies instanceof HttpError) return null;
        const dataMovies = movies.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }
}