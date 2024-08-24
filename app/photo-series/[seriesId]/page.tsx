import { Header } from "@/components/ui/header-on-page";
// import {
//   getASeries,
//   getAnAsset,
//   getPhotoSeries,
// } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { ImageSeriesProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { fetchDataImage } from "@/utils/contentful-fetches";

type Props = { params: { seriesId: number } };
interface Image {
  imgSrc: string;
  description: string;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  // const data = await getASeries(seriesId);

  return {
    title: `Photo Series | ${params.seriesId}`,
    description: 'image',
  };
}

// export async function generateStaticParams() {
//   const data_ = await getPhotoSeries();
//   const data = data_.props.images;
//   return data.map((image: any) => ({
//     seriesId: image.slug.toString(),
//     revalidate: 86400,
//   }));
// }

// return users .map(user => ({
//   userId: user.id.toString()
//   })D

async function Page({ params }: Props) {
  const { seriesId } = params;
  const data = await fetchDataImage();

  //handle pretty urls, the stulg is fetched and the data is filtered from the same query
  // const data = data_.props.images.filter(
  //   (image: any) => image.slug === seriesId
  // )[0];
  // // console.log(data);

  // let x = await JSON.stringify(data.images);
  return (
    <AnimationWrapper>
      <Header title={data?.dataContent[seriesId].category} subtitle={data?.dataContent[seriesId].content} />
      <section className="py-24 md:mx-1 justify-self-center ">
        {data?.dataContent[seriesId].images.map((image: Image, index: number) => (
          <div
            className={`flex flex-col items-center justify-between md:px-24 pt-24 py-1 text-2xl tracking-tight transition-colors text-muted-foreground ${
              // index % 2 ? "md:flex-row-reverse" : ""
              ""
            }`}
            key={index}
          >
            {/* <h2 className="mx-auto mb-5">{image.alt}</h2> */}
            {/* <div className="md:hidden text-center mx-2">
              <p className="text-sm md:text-xl md:text-muted-foreground group-hover:opacity-100 line-clamp-2">
                {image.alt} <br /> {image.date}
              </p>
            </div> */}
            <Image
              src={`/images/${data?.dataContent[seriesId].category}/${image.imgSrc}`}
              alt={image.description}
              width={400}
              height={300}
              quality={100}
              className="max-h-[85vh] aspect-auto w-auto"
              sizes="100vh"
              blurDataURL={'data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA='}
              placeholder="blur"
              priority
            />
            <div className="md:block md:p-6 max-w-2xl min-w-lg py-4">
              <p className="text-sm md:text-xl text-center text-foreground-muted md:text-muted-foreground line-clamp-3">
                {image.description} <br />
                {/* {image.date && <span className="text-xs">{image.date}</span>} */}
              </p>
            </div>
          </div>
        ))}
      </section>
      {/* <div className="container flex flex-col my-10">
        <div className="flex justify-center">{x}</div>
      </div> */}
    </AnimationWrapper>
  );
}

export default Page;
