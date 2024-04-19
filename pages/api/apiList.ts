import axios, { getData } from "@/lib/axios";
import { MovieDetails, MovieResponse } from "@/lib/definitions";

export const GetPopularMovies = async () => {
  const response = await axios.get("/movie/popular");
  return getData<MovieResponse>(response)?.results;
};

export const GetMovieDetails = async (movieId: string) => {
  const response = await axios.get(`/movie/${movieId}`);
  return getData<MovieDetails>(response);
};
