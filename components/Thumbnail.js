import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ movie }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="flex-wrap p-2 transition duration-200 ease-in transform cursor-pointer transforrm sm:hover:scale-105 group"
    >
      <Image
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        layout="responsive"
        height={1080}
        width={1920}
        alt=""
      />
      <div className="p-2">
        <p className="max-w-md truncate">{movie.overview}</p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {/* {movie.media_type && `${movie.media_type} • `} */}
          {movie.release_date || movie.first_air_date} •
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
