"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImageProps } from "@/utils/types";
import { Keyboard, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { twMerge as tm } from "tailwind-merge";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";
import { Button } from "../ui/button";

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
  images: ImageDetails[];
  idc: string;
  show: boolean;
};

function ModalSwiper({ images, idc, show }: Props) {
  var index = images
    .map(function (e) {
      return e.idc;
    })
    .indexOf(idc);

  const changeRoute = (id: number) => {
    // console.log(id, index);
    var new_idc = images[id].idc;
    history.replaceState(null, "", `/photography/${new_idc}`);
    // :TODO: change url without reloading currenlty is a hack because of the soft navigation not working.
  };

  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const [showNavigation, setShowNavigation] = useState(show);

  return (
    <div className="relative max-h-screen py-12 z-50">
      <div className="container">
        {/* Main slides */}
        <Swiper
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "--foreground",
            "--swiper-navigation-size": "24px",
          }}
          onSlideChange={(swiper) => {
            console.log(swiper.activeIndex);
            // const currentSlideElement = swiper.slides[swiper.activeIndex];
            // const currentSlideId = currentSlideElement.getAttribute("data-id");
            changeRoute(Number(swiper.activeIndex));
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoHeight={true}
          keyboard={{
            enabled: true,
          }}
          // thumbs={{ swiper: thumbsSwiper }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Keyboard, Navigation, Thumbs]}
          initialSlide={index}
          className="w-full rounded-lg mainSwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} data-id={image.id}>
              {({ isActive }) => (
                <div className="flex flex-col w-full items-center justify-center">
                  <h2 className="mx-auto mb-5">{image.alt}</h2>
                  <div className="swiper-zoom-container">
                    <Image
                      src={`/images/${image?.src}`}
                      width={image.width}
                      height={image.height}
                      quality={100}
                      className={`max-h-[80vh] aspect-auto w-auto`}
                      sizes="100vh"
                      blurDataURL={'data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA='}
                      placeholder="blur"
                      priority
                      alt={image.alt}
                      // onLoadingComplete={() => setLoaded(true)}
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-10 text-center">
          <Button
            onClick={() => setShowNavigation((open) => !open)}
            variant="ghost"
            className="mx-auto "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
            {showNavigation ? "Hide" : "Show"} Thumbnails
          </Button>
        </div>

        {/* Thumbnail */}
        <div className={tm("my-10", !showNavigation && "hidden")}>
          <Swiper
            onSwiper={setThumbsSwiper}
            // injectStyles={}
            loop={true}
            spaceBetween={12}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 9,
              },
              768: {
                slidesPerView: 9,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 10,
                spaceBetween: 12,
              },
            }}
            slidesPerView={4}
            initialSlide={index}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Keyboard, FreeMode, Navigation, Thumbs]}
            className="thumbs h-24 w-full mySwiper-thumb overflow-visible"
            // className="thumbs fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="">
                {({ isActive }) => (
                  <div className="w-full h-full ">
                    <button
                      className="flex w-full h-full items-center justify-center rounded-lg"
                      onClick={() => console.log("clicked")}
                    >
                      <Image
               src={`/images/${image?.src}`}
                        alt={image.alt}
                        width={100}
                        height={100}
                        sizes="100px"
                        blurDataURL={'data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA='}

                        placeholder="blur"
                        className={tm(
                          "block object-cover w-full h-full rounded-lg"
                        )}
                      />
                    </button>
                 

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ModalSwiper;
