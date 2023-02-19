export default function Notes() {
  return (
    <div className="w-fill m-auto p-4 md:px-16">
      <h1 className="mt-8 text-3xl font-semibold uppercase text-cyan-500">Notes 📋</h1>
      <div>
        <h3 className="mt-8 text-lg font-semibold text-cyan-500">
          Video reference: <a href="https://www.youtube.com/watch?v=T63nY70eZF0&ab_channel=developedbyed" target={"_blank"} rel="noreferrer">Click here!</a>
        </h3>
        <span>
          Tutorial teaching how to create a movie list app using Next.js 13 and Tailwind CSS.
        </span>
      </div>

      <div>
        <h3 className="mt-8 text-lg font-semibold text-cyan-500">
          Here goes the notes that i took while watched the video
        </h3>
        <span>
          This directory is a container for all the pages and components of the
          application.
        </span>
      </div>

      <div>
        <h3 className="mt-8 text-lg font-semibold text-cyan-500">
          app directory
        </h3>
        <span>
          All the pages goes inside this directory.
          <br />
          The pages are composed by a page.tsx file that contains the JSX code, this is the main files.
          <br />
          Each page can have a different layout, so we can create a layout.tsx file inside the page directory. So, if you want to use a different layout for a page, you can create a layout.tsx file inside the page directory.
          <br />
          The layout.tsx file is a component that will be used as a wrapper for the page.tsx file.
        </span>
      </div>

      <div>
        <h3 className="mt-8 text-lg font-semibold text-cyan-500">
          data fetching
        </h3>
        <span>
          Always use Server Components (SSR) when you need to fetch data from an API.
          <br />
          If you need to fetch data from an API, you would use getServerSideProps function. But, in Next 13, we have a new feature called Server Components.
          <br />
          This feature is a new way to fetch data from an API. You only need to make the component async, and fetch the data at the component level.
          <br />
        </span>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-cyan-500">
        IMPORTANT
      </h3>
      <span>
        {"Server components don't work with useState, useEffect, onClick events, etc."}
        <br />
        This only works if we <strong className="text-orange-500">{`"use client"`}</strong>. That transform this component in a client-side component.
      </span>
    </div>
  )
}