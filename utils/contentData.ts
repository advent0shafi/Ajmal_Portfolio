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
  
  // Function to generate random height and width within a range
  function getRandomSize(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Updated data with random height and width
  export const wholeImageData: ImageDetails[] = [
    {
      id: 1,
      idc: "macro-1",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
      src: "macro/image-1.jpg",
      placeholder: "blur",
      alt: "Close-up of a leaf with water droplets",
      date: "2023-01-01",
    },
    {
      id: 2,
      idc: "macro-2",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "macro/image-2.jpg",
      alt: "Extreme close-up of a flower petal",
    },
    {
      id: 3,
      idc: "macro-3",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "macro/image-3.jpg",
      alt: "Macro shot of insect on a branch",
    },
    {
      id: 4,
      idc: "macro-4",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "macro/image-4.jpeg",
      alt: "Zoomed-in view of a textured surface",
    },
    {
      id: 5,
      idc: "macro-5",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "macro/image-5.jpeg",
      alt: "Close-up of a leaf with water droplets",
    },
    {
      id: 6,
      idc: "macro-6",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "macro/image-6.jpeg",
      alt: "Extreme close-up of a flower petal",
    },
    {
      id: 7,
      idc: "macro-7",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "macro/image-7.jpeg",
      alt: "Macro shot of insect on a branch",
    },
    {
      id: 8,
      idc: "celebrity-1",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "celebrity/image-1.jpeg",
      alt: "Celebrity posing on the red carpet",
    },
    {
      id: 9,
      idc: "celebrity-2",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "celebrity/image-2.jpeg",
      alt: "Famous actor at a movie premiere",
    },
    {
      id: 10,
      idc: "nature-1",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "nature/image-1.jpg",
      alt: "Close-up of a leaf with water droplets",
    },
    {
      id: 11,
      idc: "nature-2",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "nature/image-2.jpeg",
      alt: "Extreme close-up of a flower petal",
    },
    {
      id: 12,
      idc: "nature-3",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "nature/image-3.jpeg",
      alt: "Macro shot of insect on a branch",
    },
    {
      id: 13,
      idc: "nature-4",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "nature/image-4.jpeg",
      alt: "Zoomed-in view of a textured surface",
    },
    {
      id: 14,
      idc: "nature-5",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "nature/image-5.jpeg",
      alt: "Close-up of a leaf with water droplets",
    },
    {
      id: 15,
      idc: "nature-6",
      height: getRandomSize(200, 900),
      width: getRandomSize(200, 900),
      src: "nature/image-6.jpeg",
      alt: "Extreme close-up of a flower petal",
    },
  ];
  