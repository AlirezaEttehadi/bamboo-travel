import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-grow my-36 flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-2 text-base text-gray-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button
          as={Link}
          className="mt-6"
          variant="flat"
          href="/login"
          color="success"
        >
          Go back home
        </Button>
      </div>
    </main>
  );
}
