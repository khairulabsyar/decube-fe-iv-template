import { UsePopularMovies } from "@/lib/queries";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];

export default function MovieCarousel() {
  const { data: popularMovies, isFetching } = UsePopularMovies();

  return (
    <div className={cn("flex w-full flex-col justify-content px-10")}>
      {isFetching ? (
        <div>Loading....</div>
      ) : (
        popularMovies && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className={cn("max-w-fit")}
          >
            <CarouselContent>
              {popularMovies?.map((movie, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "flex flex-col space-y-4 items-center md:justify-center md:space-x-2 md:space-y-2 lg:basis-1/2 md:flex-col",
                  )}
                >
                  <div className={cn("w-full md:max-w-[450px] md:flex-grow")}>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={`${PUBLIC_API_IMAGE_PATH}${movie.backdrop_path}`}
                        alt={`Picture of number ${index + 1} trending`}
                        fill
                        className={cn("rounded-[20px] object-cover")}
                      />
                    </AspectRatio>
                  </div>
                  <div className={cn("space-y-3 text-center md:text-left")}>
                    <p>
                      <b>Title:</b> {movie.title}
                    </p>
                    <p>
                      <b>Average Vote:</b> {movie.vote_average}
                    </p>
                    <p>
                      <b>Total Vote Count:</b> {movie.vote_count}
                    </p>
                    <Button
                      asChild
                      className={cn(
                        "h-fit w-fit rounded-2xl hover:coursor-pointer hover:text-lime-400",
                      )}
                    >
                      <Link href={`/movie/${movie.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )
      )}
    </div>
  );
}
