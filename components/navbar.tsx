import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const pathname: string = usePathname();
  const params = useParams();
  const isMoviePath = pathname?.includes("/movie/");
  return (
    <div className={cn("my-5 w-full")}>
      <div
        className={cn(
          "flex h-[50px] bg-black w-full rounded-[20px] items-center justify-center space-x-5 px-5 md:justify-start ",
        )}
      >
        <Link href={"/"} className={cn("text-white hover:text-lime-400")}>
          Home
        </Link>
        {isMoviePath && (
          <Link
            href={`/move/${params}`}
            className={cn(
              `text-white hover:text-lime-400 ${isMoviePath && "text-yellow-400"}`,
            )}
          >
            Movie
          </Link>
        )}
      </div>
    </div>
  );
}
