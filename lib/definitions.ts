export type Movie = {
  adult: boolean;
  backdrop_path: string;

  id: number;

  original_title: string;
  overview: string;
  popularity: number;

  title: string;

  vote_average: number;
  vote_count: number;
};
export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieDetails = {
  backdrop_path: string;
  budget: number;

  id: number;

  overview: string;
  release_date: string;
  revenue: number;
  title: string;
};
