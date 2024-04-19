import { GetMovieDetails, GetPopularMovies } from "@/pages/api/apiList";
import { useQuery } from "@tanstack/react-query";

export function UsePopularMovies() {
  return useQuery({
    queryKey: ["PopularMovie"],
    queryFn: GetPopularMovies,
  });
}

export function UseMovieDetails(movieId: string) {
  return useQuery({
    queryKey: ["PopularMovie", movieId],
    queryFn: () => GetMovieDetails(movieId),
  });
}
