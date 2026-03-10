import movie_info from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovies(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);
  return (
    <div className={movie_info.container}>
      <img
        src={movie.poster_path}
        className={movie_info.poster}
        alt={movie.title}
      />
      <div className={movie_info.info}>
        <h1 className={movie_info.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>HomePage &rarr;</a>
      </div>
    </div>
  );
}
