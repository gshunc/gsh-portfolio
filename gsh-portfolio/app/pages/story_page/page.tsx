import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const story_page = () => {
  return (
    <main className="flex min-h-screen flex-col items-start  p-24">
      <div className="flex flex-row justify-between container">
        <div className="pt-5">Story</div>
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noreferrer"
        >
          <h2 className={`mb-3 text-lg font-semibold`}>
            <FontAwesomeIcon
              icon={faHome}
              className={"text-lg"}
            ></FontAwesomeIcon>{" "}
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>

      <p className="border border-gray-300 bg-gray-200 bg-opacity-20 pb-6 pt-6 ps-5 pe-5 mt-5 backdrop-blur-2xl from-zinc-200 rounded-lg">
        Story
      </p>
    </main>
  );
};

export default story_page;
