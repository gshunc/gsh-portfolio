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
    </main>
  );
};

export default projects_page;
