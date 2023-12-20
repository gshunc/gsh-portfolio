"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="mt-5 scroll-auto mr-20">
      <p className="text-xl ml-3 mt-0 mr-3 mb-10 w-50">
        {"⚠️ This Website is a "}
        <span className="italic font-bold text-yellow-500">
          {"Work in Progress"}
        </span>
        {
          ". Please bear with me as I continue to add features and squash bugs. Thanks. ⚠️"
        }
      </p>
      <Image
        src="/harris_george_photo.jpeg"
        alt="Portrait Image of George Harris"
        height={196}
        width={196}
        quality={100}
        className="w-48 h-48 border-8 mt-10 rounded border-zinc-500"
      ></Image>
      <div className="font-bold text-5xl ml-3 mt-10 mb-5">
        Hi, I&apos;m George.
      </div>
      <p className="text-xl ml-3 mt-10 mb-5 w-50">
        {"I'm a Sophomore CS Major at "}
        <span className="font-extrabold text-sky-300">
          {"UNC Chapel Hill"}
        </span>{" "}
        {"(Go Heels! 🐏 🩵), originally from "}
        <span className="font-extrabold text-red-500">{"St. Louis, MO"}</span>,
        {
          " with a professional passion for tech and social good, embedded intelligent systems, AI research, entrepreneurship, and web development (you might be able to tell!). Personally, I'm interested in "
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
        {","}
        <span className="font-bold text-violet-700"> {"fitness"}</span>
        {","}
        <span className="font-bold text-yellow-300"> {"singing"}</span>
        {", and"}
        <span className="font-bold text-green-500">{" the environment"}</span>
        {". Learn more about me on the "}
        <a href="/pages/story_page" className="font-extrabold underline">
          {"My Story "}
        </a>
        <span className="font-bold">-&gt;</span>
        {" page."}
      </p>
      <p className="text-xl ml-3 mt-10 mb-5 w-50">
        {
          "As I briefly outlined above, I'm professionally, but also personally, interested in many aspects of tech. I am at my best when I am a part of or leading a high-functioning team, but I like to get some stuff done on my own as well. You can take a deeper dive into what I'm working on in the "
        }
        <a href="/pages/projects_page" className="font-extrabold underline">
          {"Projects "}
        </a>
        <span className="font-bold">-&gt;</span>
        {" page."}
      </p>
    </div>
  );
}
