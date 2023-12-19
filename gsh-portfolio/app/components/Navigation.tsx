import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="border-l-2 flex flex-col content-center">
      <div className="">
        <div className="pl-8 pr-8 mt-12 container grid grid-cols-1 text-left lg:max-w-5xl float-right">
          <Link
            href="https://www.linkedin.com/in/george-harris-19245620b/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Visit my LinkedIn!
            </p>
          </Link>
          <Link
            href="https://www.github.com/gshunc"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              <FontAwesomeIcon icon={faGithub} /> Github{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              View my Code!
            </p>
          </Link>
          <Link
            href="/pages/projects_page"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              <FontAwesomeIcon icon={faCode} /> Projects{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Check out my Projects!
            </p>
          </Link>
          <Link
            href="/pages/story_page"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My Story{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn what makes me, me!
            </p>
          </Link>
          <Link
            href={"/resume/resume.pdf"}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              <FontAwesomeIcon icon={faFileLines} /> Resume{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Check out my experience!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
