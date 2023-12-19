"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/Logo";
config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <div className="flex flex-row border-t-2">
        <Logo></Logo>
        <div className="flex min-h-screen w-5/6 flex-col pt-24">
          <div className="mt-10">
            <img
              src="/harris_george_photo.jpeg"
              alt="Portrait Image of George Harris"
              className="w-48 border-8 rounded border-zinc-800"
            ></img>
            <div className="font-bold text-5xl ml-3 mt-5 mb-5">
              Hi, I'm George.
            </div>
            <p className="text-xl ml-3 mt-5 mr-3 mb-5 w-50">
              This Website is a{" "}
              <span className="underline">Work in Progress.</span> Please bear
              with me as I continue to add and complete features. Thanks!
            </p>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </main>
  );
}
