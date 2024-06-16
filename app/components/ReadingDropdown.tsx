export default function ReadingDropdown(props: {
  title: String | JSX.Element;
  author: String;
  content: String | JSX.Element;
}) {
  const { title, author, content } = props;

  return (
    <main className="flex flex-col mr-12">
      <div className="peer w-fit rounded-md text-center content-center select-none border-2 hover:border-black p-1">
        {title} {"-"} {author}
      </div>
      <div className="invisible opacity-0 w-96 h-fit p-4 mt-1 fixed peer-hover:relative peer-hover:visible peer-hover:opacity-100 transition-opacity ease-in bg-gray-200 border-2 border-black rounded-md font-light text-sm text-center">
        {content}
      </div>
    </main>
  );
}
