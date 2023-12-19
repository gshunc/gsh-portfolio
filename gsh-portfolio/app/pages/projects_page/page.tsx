import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div className="flex flex-row justify-between container">
        <p className="text-4xl">Projects</p>
      </div>
      <p className="border border-gray-300 bg-yellow-300 bg-opacity-70 text-black pb-6 pt-6 ps-5 pe-5 mt-5 backdrop-blur-2xl rounded-lg">
        ⚠️ Work in Progress, check back soon! ⚠️
      </p>
    </main>
  );
};

export default projects_page;
