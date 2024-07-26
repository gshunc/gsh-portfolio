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
