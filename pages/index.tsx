import MovieCarousel from "@/components/movieCarousel";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MovieCarousel />
    </>
  );
}
