import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<ResultMovie>({
        total: 0,
        page: 0,
        movies: <Movie[]>[]
    });
    const [loading, setLoading] =useState(false);
    const loadMovies = async () => {
        const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying , nowPlaying );
        if (movies != null) {
            console.log(movies);
            setNowPlaying(movies);
            setLoading(true);
        }
    }
    useEffect(() => {
      loadMovies();
    }, [])
    
    return {
        nowPlaying, loading
    }
}