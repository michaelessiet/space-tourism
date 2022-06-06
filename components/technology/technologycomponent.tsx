import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { content } from "../content";
import { motion } from "framer-motion";
import Media from "react-media";

interface DestinationComponentProps {
  index: number;
  pages: number;
  changeIndex: (index: number) => void;
}

function TechnologyComponent({
  index,
  pages,
  changeIndex,
}: DestinationComponentProps) {
  const pagesArray = Array.from(Array(pages).keys());
  const pagesContent = content.technology;

  return (
    <AnimatePresence>
      <div className="flex flex-row-reverse portrait:flex-col justify-between items-center">
        {/* <Image src={pagesContent[index].images.landscape} height={527} width={515} alt=''/> */}
        <Media
          queries={{
            mobile: "(max-width:870px)",
            landscape: "(min-width:871px)",
          }}
        >
          {(matches) => (
            <>
              {matches.mobile && (
                <Image
                  src={pagesContent[index].images.landscape}
                  height={200}
                  width={500}
                  alt=""
                />
              )}
              {matches.landscape && (
                <Image
                  src={pagesContent[index].images.portrait}
                  height={527}
                  width={515}
                  alt=""
                />
              )}
            </>
          )}
        </Media>
        <div className="flex flex-row portrait:flex-col items-center">
          <ol className="landscape:pr-16 portrait:p-8">
            {pagesArray.map((page, i) => {
              return (
                <div
                  key={i}
                  className="landscape:mt-6 portrait:mx-3 portrait:float-left"
                >
                  <li
                    key={i}
                    className={`${
                      index === i ? "bg-accent text-primary" : "text-accent"
                    }  rounded-full border-[1px] border-accent`}
                  >
                    <button
                      onClick={() => changeIndex(i)}
                      className="h-16 w-16 portrait:h-8 portrait:w-8"
                    >
                      {i + 1}
                    </button>
                  </li>
                </div>
              );
            })}
          </ol>
          <div className="portrait:text-center portrait:px-4">
            <h2 className="uppercase font-nav-text text-lg space tracking-widest text-accent/50">
              The technology...
            </h2>
            <h1 className="uppercase font-bellefair text-7xl my-3 portrait:text-3xl">
              {pagesContent[index].name}
            </h1>
            <p className="text-secondary tracking-wider portrait:w-auto md:w-80 xl:w-[490px] my-3">
              {pagesContent[index].description}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default TechnologyComponent;
