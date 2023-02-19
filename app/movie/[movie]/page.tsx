import Image from "next/image";
import Link from "next/link";

// Used for static generation. This will generate a page for each movie in the popular list statically
// Study more! https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function generateStaticParams() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return res?.results?.map((movie: any) => ({
    movie: toString(),
  }))
}

export default async function MoviePage({ params }: any) {
  const { movie } = params
  const imagePath = `https://image.tmdb.org/t/p/original`
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {
    next: {
      revalidate: 30
    }
  });

  const res = await data.json();

  return (
    <div className="w-full max-w-2xl m-auto flex flex-col items-center mt-8">
      <Link href='/' className=" text-gray-200 text-md hover:text-cyan-400 ease transition-colors">Go to home</Link>
      <Image src={imagePath + res.backdrop_path} alt='Movie poster' width={1000} height={1000} className='my-4 rounded w-full' priority />
      <h2 className="text-2xl text-cyan-400 font-semibold">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-500 max-w-max my-2 py-2 px-4 rounded">{res.status}</h2>
      <h2 className="w-full text-center">{res.overview}</h2>
    </div>
  )
}