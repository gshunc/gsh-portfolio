import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="flex min-h-screen flex-col items-start mt-10 mr-20">
      <p className="self-center border border-gray-300 bg-yellow-300 bg-opacity-70 text-black text-center p-6 mb-10 backdrop-blur-2xl rounded-lg">
        ⚠️ Work in Progress, check back for more content soon! ⚠️
      </p>

      <p className="text-4xl">Projects</p>

      <p className="text-2xl underline mt-10">Professional Biography</p>
      <div>
        <p className="mt-5">{"⚠️ WORK HERE ⚠️"}</p>
      </div>
    </main>
  );
};

export default projects_page;
