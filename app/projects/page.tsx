import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import Image from "next/image";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="min-h-full">
      <div className="pb-10 pt-10 flex flex-col">
        <p className="text-2xl lg:text-5xl font-semibold underline mt-5">
          Projects and Pursuits
        </p>
        <div className="flex lg:min-h-screen flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-10 lg:mb-10">
          <div className="text-3xl font-normal underline">Research</div>
          <p className="mt-5">
            <span className="text-xl lg:text-2xl text-sky-300">
              -&gt; AURA Project
              <span className="text-base text-white">
                : Deep Learning, Convolution, LSTM, WI-FI CSI, Next.js, MongoDB
              </span>
            </span>
          </p>
          <span className="font-bold ml-8 mt-5 text-sky-300">
            <a href={"https://ei.cs.unc.edu/"} className="group">
              <span className="underline">UNC Embedded Intelligence Lab</span>
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </a>
          </span>
          <p className="mt-5">
            {
              "I worked in lab under Professor Shahriar Nirjon and a PhD Researcher. In the lab, I individually built and designed a data visualization and analytics dashboard for a WIFI CSI deep learning signal analysis project. Helped remodel backend to ensure fast data writes and proper indexing for MongoDB Databse. At the same time, I read research papers for and did personal research on convolution, LSTM, WIFI CSI techniques and deep learning signal analysis for an upcoming formal mentored research position and my Senior Thesis."
            }
          </p>
          <p className="mt-4 mb-5">
            {
              "The platform I built is being used in an ongoing study with UTSA and Florida State schools of nursing using wifi-based movement detection to monitor patient behavior and activity statistics for alzheimers and cancer patients. (Pretty cool in my optinion)."
            }
          </p>
          <Image
            src="/AURA_project.png"
            alt="Image of prize ceremony, showing two of our team members on the left side of the screen."
            width={600}
            height={320}
            className="border-8 border-black rounded mt-2 mb-10 w-container h-auto self-center"
          ></Image>
          <Image
            src="/AURA_analytics_page.png"
            alt="Image of prize ceremony, showing two of our team members on the left side of the screen."
            width={600}
            height={320}
            className="border-8 border-black rounded mt-2 mb-10 w-container h-auto self-center"
          ></Image>
          <div className="text-3xl font-normal underline mb-5">
            Clubs and Organizations
          </div>
          <section className="border-2 border-black rounded-xl w-full p-4 mb-5">
            <div className="flex flex-row items-end justify-between text-xl lg:text-2xl text-teal-300 w-full">
              <p>-&gt; CS + Social Good</p>
              <p className="text-lg text-white ml-5">
                Education Team TA (Executive Board), Full Stack Web Developer
              </p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-2xl text-sky-400 mt-5 w-full">
              <p>-&gt; ACM at Carolina</p>
              <p className="text-lg text-white ml-5">Treasurer</p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-2xl text-yellow-400 mt-5 w-full">
              <p>-&gt; Carolina Choir</p>
              <p className="text-lg text-white ml-5">Outreach/Publicity Lead</p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-2xl text-purple-400 mt-5 w-full">
              <p>-&gt; Undergraduate Student Government</p>
              <p className="text-lg text-white ml-5">General Staff</p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-2xl text-green-500 mt-5 w-full">
              <p>-&gt; Biokind UNC</p>
              <p className="text-lg text-white ml-5">Founding Data Analyst</p>
            </div>
          </section>
          <div className="text-3xl font-normal underline">
            Personal Projects
          </div>
          <p className="mt-5">
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
              'My first real project in college, "RiceSavers" was my team\'s submission for HackNC 2022. In November of 2022, my team and I were all very new to college, didn\'t know eachother very well, and weren\'t exceedingly confident that we would be able to do much of anything at the contest. As we began to brainstorm and look over the categories to compete in, we noticed a "Jonn Deere - \'Best Agricultural Hack\'" cateogory. We decided that we might as well pursue it, and created a project using Tensorflow and Keras with a JS and HTML frontend, designed to detect disease in images of rice plants. Despite more than half of our team coming down with the flu, and managed to hack together a model that had a respectable accuracy. Working through the night, we went to record our project overview video and submit. Not expecting to win much of anything given the circumstances, most of our members opted to go home and sleep off their illness. The two of us that decided to attend the award ceremony were shocked and excited to hear that we were selected for the "Best Junior Hack" prize alongside one other team. You can see an image of the award ceremony below, as well as a link to the devpost for the project. (If you happen to watch the video, you can hear how sick we were!) '
            }
            <Link
              href="https://devpost.com/software/rice-savers-through-machine-learning"
              rel={"noopener noreferrer"}
              target="_blank"
              className="font-bold self-center text-green-500 group"
            >
              <span className="underline">{"Devpost"}</span>
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </p>

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
            <span className="font-bold text-purple-400 group">
              <Link
                href="https://www.compassctr.org/"
                rel={"noopener noreferrer"}
                target="_blank"
              >
                <span className="underline">Compass Center</span>
                <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
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
            className="border-8 border-black rounded mt-10 self-center w-container h-auto"
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default projects_page;
