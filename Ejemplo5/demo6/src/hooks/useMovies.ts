import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [loading, setLoading] =useState(false);
    const loadMovies = async () => {
        const movies = await FilmAdapter.getNowPlaying();
        setNowPlaying(movies);
        setLoading(true);
    }
    useEffect(() => {
      loadMovies();
    }, [])
    
    return {
        nowPlaying, loading
    }
}