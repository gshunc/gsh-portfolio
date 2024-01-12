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
    name: "Projects and Goals",
    message: "Check out my Projects and other pursuits!",
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
    message: "Email me at gsh@unc.edu!",
    href: "mailto:gsh@unc.edu",
    isReferrer: true,
    fa: faEnvelope,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="border-l-2 border-t-2 border-r-2 lg:border-t-0 flex lg:flex-col lg:w-72 lg:content-center lg:overflow-y-auto bg-black">
      <div className="pl-8 pr-8 lg:mt-12 container lg:grid lg:grid-cols-1 text-left float-right">
        {routes.map((link) => (
          <Link
            href={link.href}
            className="group rounded-lg lg:border lg:border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
            target={link.isReferrer ? "_blank" : "_self"}
            rel={link.isReferrer ? "noopener noreferrer" : ""}
            key={link.name}
          >
            <h2 className={`mb-3 text-xs lg:text-lg font-semibold`}>
              <FontAwesomeIcon icon={link.fa} /> {link.name}{" "}
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`hidden lg:block m-0 max-w-[30ch] text-sm opacity-50`}
            >
              {link.message}
            </p>
          </Link>
        ))}
        {pathname != "/" && (
          <Link
            href="/"
            className="lg:mt-8 group rounded-lg lg:border px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`text-xs lg:text-lg font-semibold`}>
              <FontAwesomeIcon icon={faHome} /> Home
              <span className="lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        )}
      </div>
    </div>
  );
};
