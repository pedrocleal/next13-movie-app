"use client"
import Image from "next/image"
import Link from "next/link"

export function MovieCard(props: any) {
  const imagePath = `https://image.tmdb.org/t/p/original`

  return (
    <div className={'flex flex-col items-center gap-2 max-w-max'}>
      <Link href={`/movie/${props.id}`}>
        <Image src={imagePath + props.poster_path} alt='Movie image' width={300} height={300} className='rounded' />
      </Link>
      <h2 className="font-semibold">{props.title}</h2>
      <span>Release date: {props.release_date}</span>
    </div>
  )
}