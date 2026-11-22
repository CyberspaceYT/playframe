import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CloudSky from "@/components/CloudSky";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08080A] text-center text-white">
      <CloudSky />
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
      <div className="relative z-10">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
