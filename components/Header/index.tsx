import Link from "next/link";

export function Header() {
  return (
    <header className='p-4 text-lg flex w-full justify-between'>
      <h1>NEXT13-MOVIE-APP</h1>
      <nav>
        <ul className="flex gap-4 font-semibold">
          <li className="hover:text-cyan-500 transition-colors ease"><Link href="/">Home</Link></li>
          <li className="hover:text-cyan-500 transition-colors ease"><Link href="/notes">Notes</Link></li>
        </ul>
      </nav>
    </header>
  )
}