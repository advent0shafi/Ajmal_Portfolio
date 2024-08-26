import React, { Suspense } from "react";
import { Header } from "@/components/ui/header-on-page";
import Link from "next/link";
import AnimationWrapper from "@/components/ui/animation-wrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me and where to find me.",
};

type Props = {};

async function Page({}: Props) {
  // About page should have my image and a short description of me with some links to my socials
  return (
    <AnimationWrapper>
      <Header
        title={"👋 Hi, I am Ajmal Phoneographer"}
        subtitle={"I capture the world through my lens, one photo at a time. When I’m not taking photos."}
        subtitle2={"I work as a product manager, creating products that empower learners."}
        image={"/profile.jpg"}
      />

      <div className="flex justify-center p-10">
        <Link
          href="mailto:ajmalkdr31@gmail.com"
          className="mx-5 shrink"
          target="_blank"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            className="opacity-70 hover:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        {/* twitter */}
        <Link
          href="https://www.instagram.com/ajmal_phoneographer?igsh=d3J3bGFmeGRlNm5p"
          className="mx-5 shrink"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70 hover:opacity-100"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>

        <Link
          href="https://youtube.com/@ajmalphoneographer?si=isk11b_9qbfWb4R5"
          className="mx-5 shrink"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
             className="opacity-70 hover:opacity-100"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" 
            fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd" >

            </path>
          </svg>
        </Link>

        <Link
          href="https://www.linkedin.com/in/ajmal-m-68a536324/"
          className="mx-5 shrink"
          target="_blank"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            className="opacity-70 hover:opacity-100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <p className="text-muted-foreground text-center p-10">
        Welcome to my creative space! I’m Ajmal, a photographer with a passion
        for capturing life’s moments through a unique lens. My journey in
        photography began with a simple camera and a love for storytelling
        through visuals. Over time, my work caught the eye of many, including
        Google, who recognized my dedication and awarded me the latest Pixel
        smartphone to further elevate my craft. This recognition has not only
        enhanced my skills but also helped me build a community of over 100,000
        followers on Instagram who share my love for visual storytelling. Every
        photo I take is a reflection of my perspective, capturing the beauty and
        emotion in everyday life. Thank you for being a part of this journey
        with me!
      </p>
    </AnimationWrapper>
  );
}

export default Page;
