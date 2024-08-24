import { Header } from "@/components/ui/header-on-page";
// import { getPhotoSeries } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import Link from "next/link";
import { ImageSeriesProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Metadata } from "next";
import { contentData } from "@/utils/contentData";
import { fetchDataImage } from "@/utils/contentful-fetches";
interface Image {
  imgSrc: string;
  description: string;
}

interface DataContent {
  category: string;
  content: string;
  thumbnail: string;
  images: Image[];
}



type Props = {};

export const metadata: Metadata = {
  title: "Photo Series",
  description: "Photographs in meaningful grouping.",
};

const Page = async (props: Props) => {
  // const contentData = await fetchDataImage();

  return (
    <AnimationWrapper>
      <Header
        title="Photo Series"
        subtitle="Photographs in meaningful grouping."
        subtitle2="A message conveyed, a feeling captured through a series of images."
      />

      <div className="flex flex-col items-center justify-between md:px-24 pt-24">
        {contentData.map((data: DataContent, index: number) => (
          // for each image, show the image alternatingly on left and right with the setiesTitle and description on the other side
          <>
            <Separator key={index} className={index === 0 ? "hidden" : ""} />
            <div key={index} className="py-10 my-10">
              <Link
                // href={`/photo-series/?photoId=${image.idc}`}
                href={`/photo-series/${index}`}
                className={`grid relative md:static place-content-center md:flex items-center group transition duration-200 rounded-sm ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                // {`https://twitter.com/intent/tweet?text=Check%20out%20this%20pic%20from%20Next.js%20Conf!%0A%0Ahttps://nextjsconf-pics.vercel.app/p/${index}`}
              >
                <div className="md:hidden text-center mx-2">
                  <p className=" group-hover:opacity-100 scroll-m-20 md:border-b py-1 text-xl md:text-3xl font-semibold tracking-tight transition-colors">
                    {data.category}
                  </p>
                  <p className="text-sm md:text-xl md:text-muted-foreground group-hover:opacity-100 line-clamp-2">
                    {data.content} <br /> 12/23/3
                  </p>
                </div>
                <Image
                  style={{
                    transform: "translate3d(0, 0, 0)",
                    minHeight: 400,
                    maxWidth: 500,
                  }}
                  src={`/images/${data.thumbnail}`}                
                    alt={'catogery-image'}
                  width={700}
                  height={480}
                  quality={50}
                  className="object-cover h-auto max-w-full aspect-auto rounded-sm drop-shadow group-hover:brightness-110 group-hover:shadow-2xl border-2 border-zinc-500/20 dark:group-hover:border-zinc-500/70 "
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                  placeholder="blur"
                  blurDataURL={'data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA='}
                />

            
                {/* {console.log(image.blurDataURL)} */}
                {/* <div className="absolute md:hidden top-0 mb-20 right-0 bottom-0 left-0 bg-gradient-to-b to-transparent from-zinc-900 opacity-80 md:opacity-0 group-hover:opacity-80 "></div> */}
                <div className="hidden md:block md:p-12 lg:m-24 max-w-2xl">
                  <p className="my-3 opacity-50 group-hover:opacity-100 scroll-m-20 md:border-b pb-2 text-xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    {data.category}
                  </p>
                  <p className="text-sm opacity-50 md:text-xl text-white md:text-muted-foreground group-hover:opacity-100 line-clamp-3">
                    {data.content} <br /> 12/23/33
                  </p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default Page;
