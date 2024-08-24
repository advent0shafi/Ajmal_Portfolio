// "use client";
import { ImageProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

interface ImageDetails {
  id: number;
  idc: string;
  height: number;
  width: number;
  blurDataURL?: string;
  src: string;
  placeholder?: string;
  alt: string;
  date?: string;
}
type Props = {
  image: ImageDetails;
  index: number;
  href: string;
};

export default function ImageContainer({ image, index, href }: Props) {
  const widthHeightRatio = 400 / 300;
  const galleryHeight = Math.ceil(500 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 5) + 3;

  return (
    <div
      className="md:w-[500px] justify-self-center "
      style={{ gridRow: `span ${photoSpans}` }}
      key={index}
    >
      <div
        className="relative group group-hover:brightness-150 transition duration-200 group-hover:shadow-lg
        hover:shadow-indigo-500/90 border-2 border-zinc-500/20 hover:border-zinc-500/70 rounded-sm"
      >
        <Link
          //   href={`${href}?photoId=${index}`}
          href={`/photography/${image.idc}`}
          // replace
          scroll={false}
          className="grid place-content-center"
          // style={{ backgroundColor: image.blurDataURL }}
        >
          <Image
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={`/images/${image.src}`}
            alt={image.alt}
            width={720}
            height={480}
            quality={80}
            className="rounded-sm  "
            // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            loading={index < 10 ? "eager" : "lazy"}
            // sizes="250px"
            sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
            placeholder="blur"
            blurDataURL={'data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA='}
            />

          <div className="absolute rounded-b-sm top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900 opacity-80 md:opacity-0 group-hover:opacity-80 "></div>
          <div>
            <p className=" text-xs absolute bottom-1 text-white px-2 transition duration-200 opacity-70 md:opacity-0 group-hover:opacity-75 ">
              {image.alt}
              <span className="text-xs font-light line-clamp-1 block opacity-75">
                {image.date}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
