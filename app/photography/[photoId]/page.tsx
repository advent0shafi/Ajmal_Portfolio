import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import ModalSwiper from "@/components/swiper/modal-swiper";
import { ImageProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { wholeImageData } from "@/utils/contentData";

type Props = { params: { photoId: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  

  return {
    title: `Photograph | images`,
  };
}

// export async function generateStaticParams() {
//   const dataAll = await getDataPhotographs();
//   const data = dataAll.props.images;
//   return data.map((image: any) => ({
//     photoId: image.idc.toString(),
//     revalidate: 86400,
//   }));
// }

async function Page({ params }: Props) {
  return (
    <AnimationWrapper>
      <div>
        <ModalSwiper images={wholeImageData} idc={params.photoId} show={false} />
      </div>
    </AnimationWrapper>
  );
}
export default Page;

// :TODO: need to add a 404 page for when the photoId is not found
