import Link from "next/link";

const story_page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noreferrer"
      >
        <h2 className={`mb-3 text-lg font-semibold`}>
          Home{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
    </main>
  );
};

export default story_page;
