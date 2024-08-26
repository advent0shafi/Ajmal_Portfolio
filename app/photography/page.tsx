import ImageContainer from "@/components/image-container";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Header } from "@/components/ui/header-on-page";
import { generateImageData } from "@/utils/contentData";
import { ImageProps } from "@/utils/types";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A moment in time and space, captured and rendered for its perceived beauty.",
};
export async function generateStaticParams() {
  // Fetch the image data
  const wholeImageData: ImageProps[] = await generateImageData();

  // Generate static params for each image
  return wholeImageData.map((image) => ({
    id: image.idc, // Assuming 'idc' is used as a unique identifier for each page
  }));
}

export default async function Page({}: Props) {
  try {
    // Fetch the image data asynchronously
    const wholeImageData: ImageProps[] = await generateImageData();

    return (
      <AnimationWrapper>
        <div>
          <Header
            title="Photography"
            subtitle="A moment in time and space, captured and rendered for its perceived beauty."
          />
          <section className="grid md:grid-cols-gallery auto-rows-[5px] py-24 md:mx-1">
            {wholeImageData.map((image, index) => (
              <ImageContainer key={image.id} image={image} index={index} href={""} />
            ))}
          </section>
        </div>
      </AnimationWrapper>
    );
  } catch (error) {
    console.error("Error fetching image data:", error);
    return <div>Failed to load images. Please try again later.</div>;
  }
}





// import ImageContainer from "@/components/image-container";
// import AnimationWrapper from "@/components/ui/animation-wrapper";
// import { Header } from "@/components/ui/header-on-page";
// import { wholeImageData } from "@/utils/contentData";
// // import { getDataPhotographs } from "@/utils/contentful-fetches";
// import { ImageProps } from "@/utils/types";
// import { Metadata } from "next";

// type Props = {};

// export const metadata: Metadata = {
//   title: "Photography",
//   description:
//     "A moment in time and space, captured and rendered for its perceived beauty.",
// };
// interface ImageDetails {
//   id: number;
//   idc: string;
//   height: number;
//   width: number;
//   blurDataURL?: string;
//   src: string;
//   placeholder?: string;
//   alt: string;
//   date?: string;
// }

// // De
// export default async function Page({}: Props) {
//   // const data = await getDataPhotographs();
//   return (
//     <AnimationWrapper>
//       <div>
//         <Header
//           title="Photography"
//           subtitle="A moment in time and space, captured and rendered for its perceived beauty."
//         />
//         <section className="grid md:grid-cols-gallery auto-rows-[5px] py-24 md:mx-1">
//           {wholeImageData.map((image:ImageDetails , index: number) => (
//             <ImageContainer key={index} image={image} index={image.idc} href={""} />
//           ))}
//         </section>
//       </div>
//     </AnimationWrapper>
//   );
// }
