"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faFileLines,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "LinkedIn",
    message: "Visit my LinkedIn!",
    href: "https://www.linkedin.com/in/george-harris-19245620b/",
    isReferrer: true,
    fa: faLinkedin,
  },
  {
    name: "Github",
    message: "View my code!",
    href: "https://www.github.com/gshunc/",
    isReferrer: true,
    fa: faGithub,
  },
  {
    name: "Projects",
    message: "Check out my Projects!",
    href: "/pages/projects_page",
    isReferrer: false,
    fa: faCode,
  },
  {
    name: "My Story",
    message: "Learn what makes me, me!",
    href: "/pages/story_page",
    isReferrer: false,
    fa: faUser,
  },
  {
    name: "Resume",
    message: "See my experience!",
    href: "/resume/resume.pdf",
    isReferrer: true,
    fa: faFileLines,
  },
  {
    name: "Email",
    message: "Email me at gsh@unc.edu",
    href: "mailto:gsh@unc.edu",
    isReferrer: true,
    fa: faEnvelope,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="border-l-2 flex flex-col content-center">
      <div className="pl-8 pr-8 mt-12 container grid grid-cols-1 text-left lg:max-w-5xl float-right">
        {routes.map((link) => (
          <Link
            href={link.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target={link.isReferrer ? "_blank" : "_self"}
            rel={link.isReferrer ? "noopener noreferrer" : ""}
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              <FontAwesomeIcon icon={link.fa} /> {link.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {link.message}
            </p>
          </Link>
        ))}
        {pathname != "/" && (
          <Link
            href="/"
            className="mt-8 group rounded-lg border px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`text-md font-semibold`}>
              <FontAwesomeIcon icon={faHome} /> Home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
          </Link>
        )}
      </div>
    </div>
  );
};
