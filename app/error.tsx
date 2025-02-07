"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error;
};

/**
 * ErrorPage component displays an error message when something goes wrong.
 *
 * @param {ErrorPageProps} props - The properties for the ErrorPage component.
 * @param {Error} props.error - The error object to be displayed.
 * @returns {JSX.Element} The rendered error page component.
 */
const ErrorPage = ({ error }: ErrorPageProps) => {
  console.error(error);
  return (
    <main className="relative w-full h-screen p-5">
      <div className="w-full h-full border rounded-2xl flex flex-col justify-center items-center text-black">
        <h1 className="text-5xl font-bold mb-4">Something Went Wrong!</h1>
        <p className="text-xl mb-8">{error.toString()}</p>
        <Button
          asChild
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white transition-colors"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default ErrorPage;
