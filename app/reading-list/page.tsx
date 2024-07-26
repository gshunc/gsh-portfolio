import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ReadingDropdown from "../components/ReadingDropdown";
import { books } from "@/app/data/books/books";
config.autoAddCss = false;

const ReadingList = () => {
  return (
    <main className="min-h-full scroll-smooth">
      <div className="pb-10 pt-10 flex flex-col">
        <p className="text-2xl lg:text-5xl font-semibold underline mt-5 mb-10">
          Reading List
        </p>
        <section className="border-2 border-black rounded-xl w-fit p-4 mb-5">
          <div className="flex flex-row items-end justify-between text-md lg:text-md text-green-700 w-full">
            <p>-&gt; Complete</p>
          </div>
          <div className="flex flex-row items-end justify-between text-md lg:text-md text-orange-300 w-full">
            <p>-&gt; In Progress</p>
          </div>
          <div className="flex flex-row items-end justify-between text-md lg:text-md text-red-700 w-full">
            <p>-&gt; On Deck</p>
          </div>
          <div className="flex flex-row items-end justify-between text-md lg:text-md font-extrabold w-full">
            <p>-&gt; Particularly Impactful</p>
          </div>
        </section>
        <section className="scroll-smooth overflow-auto">
          {books.map((book) => {
            return (
              <a key={book.title} id={book.title}>
                <ReadingDropdown
                  title={book.title}
                  author={book.author}
                  content={
                    <div className="flex flex-col">
                      <span className="font-semibold">{"Pros:"}</span>
                      {book.pros ? book.pros : "N/A"}
                      <span className="font-semibold">{"Cons:"}</span>
                      {book.cons ? book.cons : "N/A"}
                    </div>
                  }
                  image_src={book.image_src}
                  image_alt={book.image_alt}
                  is_favorite={book.is_favorite}
                  book_state={book.state}
                />
              </a>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default ReadingList;
