import { MovieCard } from "@/components/MovieCard";

export default async function Home() {

  // This code only works if we "use client". That transform this component in a client-side component.
  // It's not a good practice to use client-side components to fetch data. We should use server-side components.

  // const [moviesList, setMoviesList] = useState<any>([]);

  // const getMoviesList = () => {
  //   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d30c70132889c3364486160e25f610f4`)
  //     .then(async (res) => {
  //       const data = await res.json();
  //       setMoviesList(data.results);
  //     });
  // }

  // useEffect(() => { getMoviesList() }, []);

  // With server-side component.
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return (
    <main className="p-4">
      <div className="flex items-center justify-between mt-8">
        <h1 className="text-3xl font-semibold uppercase text-cyan-500">Movie List</h1>
        <h2>Popular movies.</h2>
      </div>
      <div className="grid gap-8 grid-cols-fluid justify-center py-8 place-items-center">
        {res?.results?.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}
