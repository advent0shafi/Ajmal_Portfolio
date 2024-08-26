import ModalSwiper from "@/components/swiper/modal-swiper";
import Modal from "@/components/ui/Modal/modal";
import { generateImageData } from "@/utils/contentData";
import { ImageProps } from "@/utils/types";
import { Metadata, ResolvingMetadata } from "next";
// import { ImageProps } from "@/utils/types";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = { params: { photoId: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  return {
    title: `Photograph `,
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
  // export default async function Page({ params }: { params: Props }) {
  // const { photoId } = params;
  // const data = await getAnAsset(photoId);
  var idc = params.photoId;
  const wholeImageData: ImageProps[] = await generateImageData();

  // const currentImage = data;
  return (
    <Modal>
        <ModalSwiper images={wholeImageData} idc={params.photoId} show={false} />
        </Modal>
  )
}

export default Page;

// :TODO: need to figure out how to manage the modal transitions from photo to photo. (maybe that is not needed - Not sure)
// :TODO: The image feels like is not taking the full space possible => Might need to fix later
