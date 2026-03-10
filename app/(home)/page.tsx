import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

/* 
server component에서 Next.js가 내가 fetch한 것을 기억하기 때문에 
실제로는 1번째 fetch만 실제로 실행되고 이후에 새로고침을 하더라도 cache된 응답을 반환한다.

await new Promise((resolve) => setTimeout(resolve, 5000))
위 코드로 브라우저 탭에서의 로딩 상태만 변경할 수 있다
즉, 로딩 상태가 백엔드로 옮겨 간 것이다
데이터를 fetching 하는 것부터 5초 대기하는 것까지 백엔드에서 진행하기 때문에 페이지가 로딩될 때까지 사용자가 기다려야 한다
*/
