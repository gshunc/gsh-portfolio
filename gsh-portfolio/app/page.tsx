"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="mt-10">
      <img
        src="/harris_george_photo.jpeg"
        alt="Portrait Image of George Harris"
        className="w-48 border-8 rounded border-zinc-800"
      ></img>
      <div className="font-bold text-5xl ml-3 mt-5 mb-5">
        Hi, I&apos;m George.
      </div>
      <p className="text-xl ml-3 mt-5 mr-3 mb-5 w-50">
        This Website is a <span className="underline">Work in Progress.</span>{" "}
        Please bear with me as I continue to add and complete features. Thanks!
      </p>
    </div>
  );
}
