import { Movie } from "./Movie";

export default interface ResultMovie{
    total: number;
    page: number;
    movies: Movie[];
}