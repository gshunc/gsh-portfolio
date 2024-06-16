"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="ml-5 mr-5 flex flex-col lg:block lg:ml-0 lg:mt-5 scroll-auto lg:mr-20 pb-5 pt-20">
      <div className="flex lg:flex-row flex-col w-fit">
        <Image
          src="/harris_george_photo.jpg"
          alt="Portrait Image of George Harris"
          height={300}
          width={300}
          quality={100}
          className="w-64 h-64 border-8 mt-5 lg:mt-10 rounded border-black self-center lg:self-start"
        ></Image>
        <div className="self-end ml-10 w-fit font-semibold text-6xl mt-10 mb-5 pb-5">
          Hi, I&apos;m George. <span className="text-sm">(Harris)</span>
        </div>
      </div>

      <p className="text-xl text-center lg:text-left mt-10 mb-5 w-50">
        {"I study computer science, math and statistics at "}
        <span className="font-extrabold text-sky-300">
          {"UNC Chapel Hill"}
        </span>{" "}
        {"(Go Heels! 🐏), I'm originally from "}
        <span className="font-extrabold text-red-500">{"St. Louis, MO"}</span>
        {
          ", and have a professional passion for tech and social good, AI research, and entrepreneurship. Outside of that, I'm interested in "
        }
        <span className="font-bold text-red-500">{"history"}</span>
        {","}
        <span className="font-bold text-blue-600"> {"politics"}</span>
        {","}
        <span className="font-bold text-orange-900"> {"cooking"}</span>
        {","}
        <span className="font-bold text-orange-500">
          {" college basketball"}
        </span>
        {", "}
        <span className="font-bold text-violet-700"> {"fitness"}</span>
        {", and"}
        <span className="font-bold text-yellow-300"> {"singing"}</span>
        {". Learn more about me on the "}
        <a href="/my-story" className="font-extrabold underline group">
          {"My Story"}
          <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </a>
        {" page."}
      </p>
      <p className="text-center lg:text-left text-xl mt-10 mb-5 w-50">
        {
          "As I briefly outlined above, I'm professionally, but also personally, interested in many aspects of tech, especially in entrepreneurship and innovation. I am at my best when I am a part of or leading a high-functioning team, but I like to get some stuff done on my own as well. You can take a deeper dive into what I'm working on in the "
        }
        <a href="/projects" className="font-extrabold underline group">
          {"Projects"}
          <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </a>

        {" page."}
      </p>
    </div>
  );
}
