import ResultMovie from "../entities/ResultMovie";
import { MoviesResponse, Result } from "../Responses/dataMovies";
import { movieMapper } from "./movieMapper";


export const resultMovieMapper = (result: MoviesResponse): ResultMovie => {
    return{
        total: result.total_pages,
        page: result.page,
        movies: result.results.map((item: Result) => movieMapper(item)),
    };
}