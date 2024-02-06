import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="flex min-h-screen flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-5">
      <p className="self-center border border-gray-300 bg-yellow-300 bg-opacity-70 text-black text-center p-6 mb-5 lg:mb-0 lg:mt-10 backdrop-blur-2xl rounded-lg">
        ⚠️ Work in Progress, check back for more content soon! ⚠️
      </p>

      <p className="text-2xl lg:text-4xl underline mt-5">
        Projects and Pursuits
      </p>
      <p className="text-xl mt-5 lg:text-2xl lg:mt-10">
        -&gt; How Things Started
      </p>
      <p className="mt-5">
        {
          "I was born October 15th, 2003 in St. Louis, Missouri to two loving parents. I attended King of Kings Preschool, followed by River Bend Elementary, Pierremont Elementary MOSAIC Gifted Academy, and Parkway Central Middle and High School. In High School, I was involved in a number of organizations, serving as Senior Class President and Varsity Swim Captain, as well as Secretary of Coding Colts. I had the opportunity to give our Graduation Speech, pictured below."
        }
      </p>
    </main>
  );
};

export default projects_page;
