"use client"

interface ErrorProps {
  error: any
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      {`This ain't loading up:`} {error.message}
      <button onClick={reset}>Reset</button>
    </div>
  )
}