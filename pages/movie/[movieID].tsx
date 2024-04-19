import { UseMovieDetails } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";

const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];
export default function Movie() {
  const params = useParams();
  let movieID = params?.movieID as string;
  const { data: movieDetails, isFetching } = UseMovieDetails(movieID);
  return (
    <>
      <Head>
        <title> {isFetching ? "Loading..." : movieDetails?.title}</title>
      </Head>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        movieDetails && (
          <div
            className={cn(
              "flex flex-col space-y-4 items-center md:justify-center md:space-x-2 md:space-y-2 lg:basis-1/2 md:flex-col",
            )}
          >
            <div className={cn("w-full md:max-w-[450px] md:flex-grow")}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`${PUBLIC_API_IMAGE_PATH}${movieDetails.backdrop_path}`}
                  alt={`Picture of movie details`}
                  fill
                  className={cn("rounded-[20px] object-cover")}
                />
              </AspectRatio>
            </div>
            <div className={cn("space-y-3 text-center md:text-left")}>
              <p>
                <b>Title:</b> {movieDetails.title}
              </p>
              <p>
                <b>Description:</b> {movieDetails.overview}
              </p>
              <p>
                <b>Budget:</b> ${movieDetails.budget}
              </p>
              <p>
                <b>Release Date:</b> {movieDetails.release_date}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
}
