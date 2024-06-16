import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";
import { Story_Image } from "../components/story_page_components/Story_Image";
import { Spotify_IFrame } from "../components/story_page_components/Spotify_IFrame";
config.autoAddCss = false;

const story_page = () => {
  return (
    <main className="flex min-h-full flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-10">
      <p className="text-2xl lg:text-5xl font-semibold underline mt-5">
        My Story
      </p>

      <p className="text-xl mt-5 lg:text-3xl underline lg:mt-10">
        How Things Started
      </p>
      <p className="mt-5">
        {
          "I was born October 15th, 2003 in St. Louis, Missouri to two loving parents. I attended King of Kings Preschool, followed by River Bend Elementary, Pierremont Elementary MOSAIC Gifted Academy, and Parkway Central Middle and High School. In High School, I was involved in a number of organizations, serving as Senior Class President and Varsity Swim Captain, as well as Secretary of Coding Colts. I had the opportunity to give our Graduation Speech, pictured below."
        }
      </p>
      <Story_Image
        src={"/graduation_speech.JPG"}
        alt={"Graduation speech picture"}
      />

      <p className="text-3xl underline mt-10">My Interests</p>
      <p className="mt-5">
        {
          " As listed on the home page, some of my interests include history, politics, cooking, college basketball, singing, fitness, and the environment. I want to talk a little about each, here."
        }
      </p>

      <p className={`text-xl mt-10`}>-&gt; History and Politics</p>
      <div className="lg:ml-10">
        <p className="mt-5">
          {
            "In applying to college, I almost decided to apply as a Political Science major with the intent to enter into Law School following undergrad. Even as I entered college and began to take courses under my Computer Science major, I contemplated switching my major to Political Science and History and pursuing the same goal. While I was and am extremely passionate for technology and the tools it can unlock in innovation and entrepreneurship, politics and history was such a strong personal passion of mine that it almost drew me away."
          }
        </p>
        <p className="mt-5">
          {
            "In grade school, History and Social Studies was always my favorite subject, mostly because it didn't feel like I was doing school, but moreso pursing a passion. At the same time that I was learning interesting new history, I was engaging my writing and communication skills and working on memory. For me, History was the whole package."
          }
        </p>
        <p className="mt-5">
          {
            'Nowadays, this educational passion has morphed into a personal passion, where I often find myself watching documentaries, reading random historical wikipedia articles, and listening to podcasts. Right now, my favorite historical podcast is one of the classics: "History of Rome", by Mike Duncan.'
          }
        </p>
        <Spotify_IFrame />
      </div>

      <p className="text-xl mt-10">-&gt; Cooking</p>
      <div className="lg:ml-10">
        <p className="mt-5">
          {
            "My interest in cooking was sparked from years of helping my Mom in the kitchen when she needed another hand, which moved into preparing parts of meals on my own, then cooking steaks, and then starting to make my own full meals. The part of cooking I find most fun and fascinating is the science behind it; how every part of cooking a meal is like its own chemical reaction, with technique and ingredients each playing their part in the formula."
          }
        </p>
        <p className="mt-5">
          {
            'Living in a college dorm has made it hard to keep up with this interest, but whenever I am home, I make sure to get back into the swing of things. I like to prepare my own lunches and sometimes entire meals for special occassions. My most favorite recipe that I have made so far has been Pasta Alla Amatriciana from "Salt Fat Acid Heat" by Samin Nosrat, my '
          }
          <Link
            href="https://www.amazon.com/Salt-Fat-Acid-Heat-Mastering/dp/1476753830"
            className="font-bold underline text-orange-900"
            rel={"noopener noreferrer"}
            target="_blank"
          >
            {" Favorite Cookbook"}
          </Link>
          <span className="font-bold text-orange-900">-&gt;</span>
          {"."}
        </p>
        <div className="flex flex-row justify-evenly self-center lg:pr-10">
          <Link
            href="https://www.amazon.com/Salt-Fat-Acid-Heat-Mastering/dp/1476753830"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <Story_Image
              src={`/salt_fat_acid_heat.jpg`}
              alt="Cookbook Cover"
            ></Story_Image>
          </Link>
        </div>
      </div>

      <p className="text-xl mt-10">-&gt; Sports</p>
      <div className="lg:ml-10">
        <p className="mt-5">
          {
            "Being from St. Louis, sports have been an interest of mine for a long time. Growing up, the Cardinals in Baseball were my main team, with a casual interest in the Blues in hockey. Since coming to college, however, UNC sports have taken over. I'm a huge Tar Heel Basketball and Football fan, attending as many games as I can make it to. I'm also a casual fan of the San Francisco 49ers, since  my parents lived in the Bay Area for about a decade."
          }
        </p>
        <div className="flex flex-row justify-evenly self-center lg:pr-10">
          <Story_Image
            src="/deandome.jpg"
            alt={"Image of the dean dome at UNC"}
          ></Story_Image>
        </div>
      </div>

      <p className="text-xl mt-10">-&gt; Musical Journey</p>
      <div className="lg:ml-10 mb-10">
        <p className="mt-5">
          {
            "Growing up, music was a steady part of my life. From Classic Rock to the Grateful Dead to Jazz to Bluegrass, music was always playing in our house. But my personal music career began in Elementary School Choir, meeting once a week and singing simple songs. My sister was heavily involved in choir, and as she went into Middle School, she joined choir. I did the same, and continued in choir ever since then."
          }
        </p>
        <p className="mt-5">
          {
            "In high school, I participated in two choirs as classes, earning All Suburban honors three times, as well as All State honors my Junior year, and All State Vocal Jazz my Senior year. There, I was honored to be the featured soloist. Finally, Senior Year, I was honored with the "
          }
          <Link
            href="https://www.wwbw.com/pages/arionaward"
            rel={"noopener noreferrer"}
            target="_blank"
          >
            <span className="font-bold text-yellow-400 underline">
              {"Arion Award"}
            </span>
            <span className="font-bold text-yellow-400">-&gt;</span>
          </Link>
          {
            ', "established in 1948 to give national recognition... for outstanding achievement in band, orchestra or chorus", as well as community and academic achievement. Nowadays, my musical career continues as a part of the '
          }
          <Link
            href="https://music.unc.edu/undergraduate/ensembles/choral/carolinachoir/"
            rel={"noopener noreferrer"}
            target="_blank"
            className="underline font-bold text-sky-300"
          >
            Carolina Choir
          </Link>
          <span className="font-bold text-sky-300">-&gt;</span>
          {` at UNC.`}
        </p>
      </div>

      <p className="text-xl mt-10">-&gt; Fitness</p>
      <div className="lg:ml-10 mb-10">
        <p className="mt-5 pb-20">
          {
            "In my life, I have played a number of sports. Baseball, swimming, water polo, football, and tennis, to name a few. In High School, I was Varsity Swim Captain, specializing in distance freestyle, and helped lead my team to a conference title. Nowadays, I am not a part of any organized athletic teams, but fitness remains a part of my life through regularly going to the gym, eating healthy, and going on hikes and swims in the summer. I am also a member of UNC's Club Golf team as a part of the non-competitive team. Fitness, health, and wellbeing are a big part of my life and are things that I proritize in many of the decisions I make on a daily basis."
          }
        </p>
      </div>
      <div className="pb-10 self-end w-container">
        {"Last updated 01/11/24"}
      </div>
    </main>
  );
};

export default story_page;
