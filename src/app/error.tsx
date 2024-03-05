"use client"; // Error components must be Client Components

export default function Error() {
  return (
    <main className="flex-grow my-36 lg:my-52 flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8">
        <h1 className="lg:text-4xl text-xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Whoops! Something bad happened
        </h1>
        <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
          500 error
        </h3>
        <p className="text-base text-gray-500">
          We apologize for the inconvenience, but it seems that an error has
          occurred on this page.
          <br />
          Our team has been notified, and we are working diligently to resolve
          the issue.
          <br />
          In the meantime, please feel free to explore other sections of our
          website.
          <br />
          <span className="text-green-600">
            We appreciate your patience and understanding.
          </span>
        </p>
      </div>
    </main>
  );
}
