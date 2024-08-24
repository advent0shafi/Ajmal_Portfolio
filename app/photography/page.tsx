import ImageContainer from "@/components/image-container";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Header } from "@/components/ui/header-on-page";
import { wholeImageData } from "@/utils/contentData";
import { ImageProps } from "@/utils/types";
import { Metadata } from "next";
import Image from "next/image";

type Props = {};
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
export const metadata: Metadata = {
  title: "Photography",
  description:
    "A moment in time and space, captured and rendered for its perceived beauty.",
};

export default async function Page({}: Props) {
  return (
    <AnimationWrapper>
      <div>
        <Header
          title="Photography"
          subtitle="A moment in time and space, captured and rendered for its perceived beauty."
        />
        <section className="grid md:grid-cols-gallery auto-rows-[5px] py-24 md:mx-1">
          {wholeImageData.map((image: ImageDetails, index: number) => (
            <ImageContainer key={index} image={image} index={index} href={""} />
          ))}
        </section>
      </div>
    </AnimationWrapper>
  );
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
