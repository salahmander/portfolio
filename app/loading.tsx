"use client";

import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = () => {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full border rounded-2xl flex justify-center items-center">
        <ClipLoader size={150} aria-label="Loading Spinner" />
      </div>
    </main>
  );
};

export default LoadingPage;
