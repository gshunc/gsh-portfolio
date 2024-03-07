import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import Image from "next/image";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="flex min-h-full flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-5">
      <p className="self-center border border-gray-300 bg-yellow-300 bg-opacity-70 text-black text-center p-6 mb-5 lg:mb-0 lg:mt-10 backdrop-blur-2xl rounded-lg">
        ⚠️ Work in Progress, check back for more content soon! ⚠️
      </p>
      <p className="text-2xl lg:text-5xl font-bold underline mt-5">
        Projects and Pursuits
      </p>
      <p className="mt-5">
        {
          "Hello! This page will serve as a summary of my personal projects and my other personal and professional pursuits at UNC and beyond. First, below, I'll give a short summary of each project, the process that went into making them, and a few images of each for your enjoyment!"
        }
      </p>
      <div className="lg:flex lg:flex-row  ml-0 lg:ml-5">
        <div className="lg:flex hidden min-w-1 max-w-1 lg:min-h-full bg-white lg:mt-12 ml-12 mr-16 flex flex-col items-center">
          <div className="min-h-1 max-h-2 min-w-24 max-w-24 bg-white"></div>
          <div className="lg:mt-[3.25rem] min-w-24 min-h-24 max-w-24 max-h-24 rounded-full bg-white text-black hidden lg:flex items-center justify-center font-bold border-4 border-green-500 text-center">
            <span>{"Nov 2022"}</span>
          </div>
          <div className="lg:mt-[51rem] min-w-24 min-h-24 max-w-24 max-h-24 rounded-full bg-white text-black hidden lg:flex items-center justify-center font-bold border-4 border-purple-400 text-center">
            <span>{"Aug-Dec 2023"}</span>
          </div>
          <div className="lg:mt-[41rem] min-w-24 min-h-24 max-w-24 max-h-24 rounded-full bg-white text-black hidden lg:flex items-center justify-center font-bold border-4 border-sky-300 text-center">
            <span>{"Sept 2023-Present"}</span>
          </div>
          <div className="min-h-1 max-h-2 min-w-24 max-w-24 bg-white lg:mt-auto"></div>
        </div>
        <div className="flex lg:min-h-screen flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-24">
          <p className="mt-10">
            <span className="text-xl lg:text-2xl text-green-500">
              -&gt; RiceSavers
            </span>
            <span className="text-base">
              : Python, Tensorflow, Flask, HTML, CSS, Javascript
            </span>
          </p>
          <span className="font-bold ml-8 mt-5 text-yellow-300">
            Awarded &quot;Best Junior Hack 2022&quot;
          </span>
          <p className="mt-5">
            {
              'My first real project in college, "RiceSavers" was my team\'s submission for HackNC 2022. In November of 2022, my team and I were all very new to college, didn\'t know eachother very well, and weren\'t exceedingly confident that we would be able to do much of anything at the contest. As we began to brainstorm and look over the categories to compete in, we noticed a "Jonn Deere - \'Best Agricultural Hack\'" cateogory. We decided that we might as well pursue it, and decided to create a product using Tensorflow and Keras with Javascript and HTML as a frontend, which was designed to detect disease in images of rice plants. We worked through the night, with more than half of our team coming down with the flu, and managed to hack together a model that had a respectable accuracy. Working through the night, we went to record our project overview video and submit to the John Deere category when we realized that we totally misunderstood the requirements, which asked us to implement a product using thre John Deere API. Our hopes dashed, we submitted to the general prize. Not expecting to win much of anything, many of our members opted to go home and sleep off their illness. The two of us that decided to attend the award ceremony were shocked and excited to hear that we were selected for the "Best Junior Hack" prize alongside one other team. You can see an image of the award ceremony below, as well as a link to the devpost for the project. (If you happen to watch the video, you can hear how sick we were!)'
            }
          </p>
          <Link
            href="https://devpost.com/software/rice-savers-through-machine-learning"
            rel={"noopener noreferrer"}
            target="_blank"
            className="font-bold text-lg self-center underline text-green-500"
          >
            {"Devpost"}-&gt;
          </Link>
          <Image
            src="/hacknc_2022_image.jpeg"
            alt="Image of prize ceremony, showing two of our team members on the left side of the screen."
            width={600}
            height={320}
            className="border-8 border-white rounded mt-10 w-container h-auto self-center"
          ></Image>
          <p className="mt-10">
            <span className="text-xl lg:text-2xl text-purple-400">
              -&gt; Compass Center Chapel Hill
            </span>
            <span className="text-base">
              : Typescript, Next.js, PostgreSQL, Figma
            </span>
          </p>
          <p className="mt-5">
            {"As a member of the Fall 2023 Project Team for "}
            <span className="font-bold text-teal-400">{"CS+Social Good "}</span>
            {
              "at UNC, I was tasked alongside two other members of the fullstack team to design, wireframe, and implement a brand new volunteering interface for the "
            }
            <span className="font-bold underline text-purple-400">
              <Link
                href="https://www.compassctr.org/"
                rel={"noopener noreferrer"}
                target="_blank"
              >
                Compass Center-&gt;
              </Link>
            </span>
            {
              " in Chapel Hill. The page serves as a central location where admins can post and manage new volunteering opportunities categorized by type of opportunity, availability, and more. While the page is not publicly available because of the sensitive nature of the volunteering opportunities and information that the Compass Center handles, below is an image of the initial Figma wireframe that I created. The page is built using Next.js, Typescript, and Firebase. I've moved away from this team because of a new position in the organization (see section on CS+Social Good below), but the project is ongoing and development continues."
            }
          </p>
          <Image
            src="/compass_center_figma.png"
            alt="Image of prize ceremony, showing two of our team members on the left side of the screen."
            width={600}
            height={400}
            className="border-8 border-white rounded mt-10 self-center w-container h-auto"
          ></Image>
          <p className="mt-10">
            <span className="text-xl lg:text-2xl text-sky-300">
              -&gt; georgeharris.tech Personal Portfolio
            </span>
            <span className="text-base">
              : HTML, Typescript, Next.js, Figma, TailwindCSS
            </span>
          </p>
          <p className="mt-5">
            {
              "Feeling the need for another personal project during the Fall 2023 recuiting cycle, and with a lot of free time on my hands during Fall Break, I decided to create this website you're currently visiting. I wanted to create a central location for those who may be interested which houses my experiences, my interests, my personal and professional pursuits, links to my resume and linkedin, and more. I decided that I would implement this website using Next.js because of my previous experience in it and because of its simple yet robust and effective project structure. So far, building this page has been a great educational experience for me, and I feel like I have become a more confident and stronger software engineer because of it. I hope you have enjoyed it too!"
            }
          </p>
        </div>
      </div>
      <div className="pt-20 pb-10 self-end w-container">
        {"Last updated 02/18/24"}
      </div>
    </main>
  );
};

export default projects_page;
