"use client";

const LoadingPage = () => {
  return (
    <main className="relative w-full h-screen p-5">
      <div className="w-full h-full border rounded-2xl flex justify-center items-center text-black">
        <h1 className="text-5xl font-bold mb-8 animate-pulse">Loading...</h1>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    </main>
  );
};

export default LoadingPage;
