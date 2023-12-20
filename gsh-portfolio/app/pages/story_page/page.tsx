import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { Spotify_IFrame } from "../../components/story_page_components/Spotify_IFrame";
config.autoAddCss = false;

const story_page = () => {
  return (
    <main className="flex min-h-screen flex-col items-start mt-10 mr-20">
      <p className="text-4xl">My Story</p>

      <p className="text-2xl underline mt-10">How Things Started</p>
      <p className="mt-5">
        {
          "I was born October 15th, 2003 in St. Louis, Missouri to two loving parents. I attended King of Kings Preschool, followed by River Bend Elementary, Pierremont Elementary MOSAIC Gifted Academy, and Parkway Central Middle and High School. In High School, I was involved in a number of organizations, serving as Senior Class President and Varsity Swim Captain in High School, as well as Secretary of Coding Colts. As a result of no class rankings, I had the opportunity to give our Graduation Speech, pictured below."
        }
      </p>
      <div className="self-center flex flex-row justify-evenly w-5/6">
        <Image
          src="/graduation_speech.JPG"
          height={407}
          width={330}
          quality={100}
          alt={"Graduation speech picture"}
          className="border-8 border-zinc-500 rounded mt-10"
        ></Image>
      </div>

      <p className="text-2xl underline mt-10">My Interests</p>
      <p className="mt-5">
        {
          " As listed on the home page, some of my interests include history, politics, cooking, college basketball, singing, fitness, and the environment. I want to talk a little about each, here."
        }
      </p>

      <p className={`text-xl mt-10`}>-&gt; History and Politics</p>
      <div className="ml-10">
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

      <p className="text-xl mt-10">-&gt; Musical Journey</p>
      <div className="ml-10">
        <p className="mt-5">
          {
            "Growing up, music was a steady part of my life. From Classic Rock to the Grateful Dead to Jazz to Bluegrass, music was always playing in our house. But my personal music career began in Elementary School Choir, meeting once a week and singing simple songs. My sister was heavily involved in choir, and as she went into Middle School, she joined choir. I did the same, and continued in choir ever since then."
          }
        </p>
        <p className="mt-5">
          {
            "In high school, I participated in two choirs as classes, earning All Suburban honors three times, as well as All State honors my Junior year, and All State Vocal Jazz my Senior year. There, I was honored to be the featured soloist. Finally, Senior Year, I was honored with the "
          }
          <a href="https://www.wwbw.com/pages/arionaward">
            <span className="font-bold text-yellow-400 underline">
              {"Arion Award "}
              -&gt;
            </span>
          </a>
          {
            ', "established in 1948 to give national recognition... for outstanding achievement in band, orchestra or chorus", as well as community and academic achievement. Nowadays, my musical career continues as a part of the Carolina Choir at UNC.'
          }
        </p>
      </div>
      <p className="self-center border border-gray-300 bg-yellow-300 bg-opacity-70 text-black text-center p-6 mt-10 backdrop-blur-2xl rounded-lg">
        ⚠️ Work in Progress, check back soon! ⚠️
      </p>
    </main>
  );
};

export default story_page;
