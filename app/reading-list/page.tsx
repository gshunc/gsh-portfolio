import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ReadingDropdown from "../components/ReadingDropdown";
config.autoAddCss = false;

const ReadingList = () => {
  return (
    <main className="min-h-full">
      <div className="pb-10 pt-10 flex flex-col">
        <p className="text-2xl lg:text-5xl font-semibold underline mt-5">
          Reading List
        </p>
        <h1 className="mt-10 text-xl font-bold">Philosphy</h1>
        <ul className="mt-2">
          <ReadingDropdown
            title="Meditations"
            author="Marcus Aurelius"
            content={
              <div>
                <span className="font-semibold">{"Pros:"}</span>
                {
                  " concept of logos and a duty to do what you are meant for in life, remembering death and knowing that other's judgements are unimportant, understanding how to live a good life that will be remembered not for fame but for positivity and morality, remembering that things will happen to you in life but that what is most important is to respond rationally and with direction"
                }
                <div>
                  <span className="font-semibold">{"Cons:"}</span>
                  {
                    " the fact that this is a journal and not written for an audience makes it hard to read or follow for long periods of time, feels a bit like having adhd when reading"
                  }
                </div>
              </div>
            }
          />
          <li>Republic - Plato</li>
          <li>The Prince - Niccolo Machiavelli</li>
        </ul>
        <h1 className="mt-10 text-xl font-bold">Politics and History</h1>
        <ul className="mt-2">
          <ReadingDropdown
            title={
              <div className="font-extrabold text-yellow-400">
                {"Systems of Survival"}
              </div>
            }
            author={"Jane Jacobs"}
            content={
              <div>
                <span className="font-semibold">{"Pros:"}</span>
                {
                  " one of the books that has had the largest impact on my way of understanding morals and systems of ethics and morality in politics and business, reframes morality as conditional on nature of the task, i.e. deception being moral when used to bust a criminal enterprise or in war, but not in commerce, highlighted a lot about what makes humans unique in the natural world; our two distinct systems of living-making, the framing as a dialogue makes things fun"
                }
                <div>
                  <span className="font-semibold">{"Cons:"}</span>
                  {
                    " sometimes the writing gets a little bit preachy and other times you almost have to read between the lines to understand what Jacobs is really getting at, that's it"
                  }
                </div>
              </div>
            }
          />
          <li>
            The Political Philosophy of Alexander Hamilton - Micahel P. Federici
          </li>
          <li>Commentaries on the Gallic War and Civil War - Julius Caesar</li>
        </ul>
      </div>
    </main>
  );
};

export default ReadingList;
