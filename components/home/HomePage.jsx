import React from "react";
import Image from "next/image";
import { TbClick } from "react-icons/tb";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 gap-0 items-center mx-auto px-4 sm:px-6 lg:px-8 lg:-mt-10">
      {/* Left column: Text, link, and button */}
      <section className="flex flex-col justify-center pt-4 pb-10 px-12 lg:pt-10">
        {/* Main heading */}
        <h1 className="text-3xl text-center font-bold mb-2 text-orange-400 md:text-4xl lg:text-5xl lg:text-left">
          <span className="block md:inline md:mr-2">Hi!</span>
          I&apos;m Eva Koss
        </h1>
        {/* Subheading */}
        <h2 className="text-2xl text-center mb-2 text-gray-900 dark:text-white lg:text-left md:text-2xl lg:text-3xl">
          Frontend developer.
        </h2>
        {/* Subheading */}
        <h3 className="text-lg text-center mb-6 text-gray-600 dark:text-gray-400 lg:text-left md:text-2xl lg:text-xl max-w-sm">
          React, Next, Redux, TypeScript, JavaScript, Tailwind, HTML&amp;CSS,
          Figma and more.
        </h3>
        {/* Links and button */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Resume download link */}
          <div className="text-center sm:text-left">
            <a
              href="/Resume_Frontend-React-Developer_Eva-Koss.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-md text-orange-500 font-bold hover:text-rose-600 dark:text-orange-400"
            >
              DOWNLOAD MY RESUME
              <TbClick className="mt-2 text-sm text-gray-600 dark:text-slate-200" />
            </a>
          </div>
          {/* Contact button */}
          <Link href="/contact" passHref>
            <button
              className="
                rounded-full text-sm sm:text-base 
                text-white bg-rose-600 hover:bg-rose-400 dark:hover:bg-rose-700
                px-4 py-2 transition-colors duration-300"
            >
              CONTACT ME
            </button>
          </Link>
        </div>
      </section>

      {/* Right column: Image */}
      <div className="flex justify-center pt-10 pb-2 order-first lg:order-last lg:pb-10">
        <Link href="/contact">
          <Image
            className="rounded-3xl animate-slow-up-down max-w-full h-auto cursor-pointer hover:animation-paused hover:shadow-[0_1px_25px_#EA580C] dark:hover:shadow-[0_1px_25px_#E10048]"
            src="/images/eva-image.jpg"
            width={400}
            height={400}
            quality={95}
            alt="Eva Koss"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
