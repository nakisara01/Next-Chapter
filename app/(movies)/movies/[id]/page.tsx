import { Suspense } from "react";
import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const {id} = await params;
  const movie = await getMovies(id)
  return {
    title: `${movie.title}`,
  };
}

export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
