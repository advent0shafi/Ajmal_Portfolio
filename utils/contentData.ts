


export const contentData = [
  {
    category: "macro",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: "macro/image-1.jpg",
    images: [
      {
        imgSrc: "image-1.jpg",
        description: "Close-up of a leaf with water droplets",
      },
      {
        imgSrc: "image-2.jpg",
        description: "Extreme close-up of a flower petal",
      },
      {
        imgSrc: "image-3.jpg",
        description: "Macro shot of insect on a branch",
      },
      {
        imgSrc: "image-4.jpeg",
        description: "Zoomed-in view of a textured surface",
      },
      {
        imgSrc: "image-5.jpeg",
        description: "Close-up of a leaf with water droplets",
      },
      {
        imgSrc: "image-6.jpeg",
        description: "Extreme close-up of a flower petal",
      },
      {
        imgSrc: "image-7.jpeg",
        description: "Macro shot of insect on a branch",
      },
    ],
  },
  {
    category: "celebrity",
    content: "Vivamus vel erat ac nunc finibus condimentum.",
    thumbnail: "celebrity/image-1.jpeg",

    images: [
      {
        imgSrc: "image-1.jpeg",
        description: "Celebrity posing on the red carpet",
      },
      {
        imgSrc: "image-2.jpeg",
        description: "Famous actor at a movie premiere",
      },
    ],
  },
  {
    category: "nature",
    content: "Praesent dignissim dolor ut neque venenatis, sed gravida eros.",
    thumbnail: "nature/image-1.jpg",
    images: [
      {
        imgSrc: "image-1.jpg",
        description: "Close-up of a leaf with water droplets",
      },
      {
        imgSrc: "image-2.jpeg",
        description: "Extreme close-up of a flower petal",
      },
      {
        imgSrc: "image-3.jpeg",
        description: "Macro shot of insect on a branch",
      },
      {
        imgSrc: "image-4.jpeg",
        description: "Zoomed-in view of a textured surface",
      },
      {
        imgSrc: "image-5.jpeg",
        description: "Close-up of a leaf with water droplets",
      },
      {
        imgSrc: "image-6.jpeg",
        description: "Extreme close-up of a flower petal",
      },
    ],
  },
];

import fs from 'fs/promises'; // Import the fs module correctly
import { getPlaiceholder } from 'plaiceholder'; // Assuming you're using the `plaiceholder` library
import sizeOf from 'image-size'; // Import the image-size library

interface ImageDetails {
  id: number;
  idc: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
  src: string;
  placeholder?: string;
  alt: string;
  date?: string;
}

// Function to get the original dimensions of an image
async function getOriginalDimensions(src: string): Promise<{ width: number; height: number }> {
  const imagePath = `./public/images/${src}`;
  const buffer = await fs.readFile(imagePath);
  const dimensions = sizeOf(buffer);
  
  if (!dimensions.width || !dimensions.height) {
    throw new Error(`Failed to get dimensions for image: ${src}`);
  }

  return {
    width: dimensions.width,
    height: dimensions.height,
  };
}

// Function to generate blur data URL
async function blurData(src: string) {
  const buffer = await fs.readFile(`./public/images/${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}

// Asynchronous function to populate image data with blurDataURL
export async function generateImageData(): Promise<ImageDetails[]> {
  const imageData: ImageDetails[] = [
    {
      id: 1,
      idc: "macro-1",
      src: "macro/image-1.jpg",
      placeholder: "blur",
      alt: "Close-up of a leaf with water droplets",
      date: "2023-01-01",
    },
    {
      id: 2,
      idc: "macro-2",
      src: "macro/image-2.jpg",
      alt: "Extreme close-up of a flower petal",
    },
    {
      id: 3,
      idc: "macro-3",
      src: "macro/image-3.jpg",
      alt: "Macro shot of insect on a branch",
    },
    {
      id: 4,
      idc: "macro-4",
      src: "macro/image-4.jpeg",
      alt: "Zoomed-in view of a textured surface",
    },
    {
      id: 5,
      idc: "macro-5",
      src: "macro/image-5.jpeg",
      alt: "Close-up of a leaf with water droplets",
    },
    {
      id: 6,
      idc: "macro-6",
      src: "macro/image-6.jpeg",
      alt: "Extreme close-up of a flower petal",
    },
    {
      id: 7,
      idc: "macro-7",
      src: "macro/image-7.jpeg",
      alt: "Macro shot of insect on a branch",
    },
    {
      id: 8,
      idc: "celebrity-1",
      src: "celebrity/image-1.jpeg",
      alt: "Celebrity posing on the red carpet",
    },
    {
      id: 9,
      idc: "celebrity-2",
      src: "celebrity/image-2.jpeg",
      alt: "Famous actor at a movie premiere",
    },
    {
      id: 10,
      idc: "nature-1",
      src: "nature/image-1.jpg",
      alt: "Close-up of a leaf with water droplets",
    },
    {
      id: 11,
      idc: "nature-2",
      src: "nature/image-2.jpeg",
      alt: "Extreme close-up of a flower petal",
    },
    {
      id: 12,
      idc: "nature-3",
      src: "nature/image-3.jpeg",
      alt: "Macro shot of insect on a branch",
    },
    {
      id: 13,
      idc: "nature-4",
      src: "nature/image-4.jpeg",
      alt: "Zoomed-in view of a textured surface",
    },
    {
      id: 14,
      idc: "nature-5",
      src: "nature/image-5.jpeg",
      alt: "Close-up of a leaf with water droplets",
    },
    {
      id: 15,
      idc: "nature-6",
      src: "nature/image-6.jpeg",
      alt: "Extreme close-up of a flower petal",
    },
  ];

  // Generate blurDataURL for each image
  for (let i = 0; i < imageData.length; i++) {
    const image = imageData[i];
    const { width, height } = await getOriginalDimensions(image.src);
    image.width = width;
    image.height = height;
    image.blurDataURL = await blurData(image.src);
  }

  return imageData;
}


// Example usage
generateImageData().then((data) => console.log(data));
