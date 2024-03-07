import Link from "next/link";

const project_menu = () => {
  return (
    <main>
      <div className="mt-20">
        <Link
          href={"/pages/projects_page"}
          className="group rounded-lg  lg:border lg:border-white lg:px-5 lg:py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 bg-black border-white font-bold"
          target={"_blank"}
          rel={""}
          key={"bruh"}
        >
          <h2
            className={`text-xs flex flex-col text-center font-semibold lg:text-left lg:text-lg lg:block`}
          >
            {"Projects"}
            <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`hidden lg:block text-sm opacity-50`}>
            {"Click for projects."}
          </p>
        </Link>
      </div>
    </main>
  );
};
export default project_menu;
