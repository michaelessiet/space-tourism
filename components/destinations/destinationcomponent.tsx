/* eslint-disable @next/next/no-html-link-for-pages */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { content } from "../content";

interface DestinationComponentProps {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

export default function DestinationRenderer() {
  const [currentDestination, setCurrentDestination] = React.useState("Moon");
  const { moon, mars, europa, titan } = {
    moon: content.destinations[0],
    mars: content.destinations[1],
    europa: content.destinations[2],
    titan: content.destinations[3],
  };
  switch (currentDestination) {
    case "Moon":
      return DestinationComponent(moon, currentDestination,setCurrentDestination);
    case "Mars":
      return DestinationComponent(mars, currentDestination,setCurrentDestination);
    case "Europa":
      return DestinationComponent(europa, currentDestination,setCurrentDestination);
    case "Titan":
      return DestinationComponent(titan, currentDestination,setCurrentDestination);
    default:
      return (
        <div className="animate-spin border-t-8 rounded-full h-32 w-32"></div>
      );
  }
}

function DestinationComponent(
  destination: DestinationComponentProps,
  currentDestination: string,
  setCurrentDestination: React.Dispatch<React.SetStateAction<string>>,
) {
  const [isloading, setisLoading] = React.useState(true);
  const { name, images, description, distance, travel } =
    destination;
  
  const IsMoon = () => {
    if(currentDestination === 'Moon') return "border-b-2 border-b-accent";
  }

  const IsMars = () => {
    if (currentDestination === "Mars") return "border-b-2 border-b-accent";
  };

  const IsEuropa = () => {
    if (currentDestination === "Europa") return "border-b-2 border-b-accent";
  };

  const IsTitan = () => {
    if (currentDestination === "Titan") return "border-b-2 border-b-accent";
  };

  return (
    <AnimatePresence>
      <motion.div key={currentDestination} exit={{opacity:0, position:"absolute"}} className="flex flex-row portrait:flex-col justify-center items-center landscape:mt-20 w-full">
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 opacity-0 flex portrait:py-8 h-full items-center justify-center"
        >
          <Image
            alt=""
            src={images.png}
            hidden={true}
            draggable={false}
            height="512px"
            width="512px"
            className={isloading ? "opacity-25" : "opacity-100"}
            onLoadingComplete={() => setisLoading(false)}
          />
        </motion.div>
        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 portrait:w-4/5  opacity-0 portrait:text-center leading-loose"
        >
          <div className="flex flex-col landscape:px-24 ">
            <ul className=" flex flex-row justify-between portrait:w-full w-3/5 landscape:px-0 font-nav-text h-16 tracking-widest xl:px-36 items-start">
              <li
                className={`h-3/5 ${IsMoon()} hover:border-b-2 cursor-pointer hover:border-b-accent`}
                onClick={() => setCurrentDestination("Moon")}
              >
                <a className="tracking-widest font-nav-text text-base">MOON</a>
              </li>
              <li
                className={`h-3/5 ${IsMars()}  hover:border-b-2 cursor-pointer hover:border-b-accent/30`}
                onClick={() => setCurrentDestination("Mars")}
              >
                <a className="tracking-widest font-nav-text text-base">MARS</a>
              </li>
              <li
                className={`h-3/5 ${IsEuropa()}  hover:border-b-2 cursor-pointer  hover:border-b-accent/30`}
                onClick={() => setCurrentDestination("Europa")}
              >
                <a className=" tracking-widest font-nav-text text-base">
                  EUROPA
                </a>
              </li>
              <li
                className={`h-3/5 ${IsTitan()}  hover:border-b-2 cursor-pointer  hover:border-b-accent/30`}
                onClick={() => setCurrentDestination("Titan")}
              >
                <a className=" tracking-widest font-nav-text text-base">
                  TITAN
                </a>
              </li>
            </ul>
            <h1 className="text-6xl font-bellefair lg:text-9xl">
              {name.toUpperCase()}
            </h1>
            <p className="text-secondary tracking-wider portrait:w-auto xl:w-[490px] ">
              {description}
            </p>
            <hr className="my-16 xl:w-[490px] portrait:my-8 text-secondary/50" />
            <div className="grid-cols-2 grid portrait:grid-cols-1 portrait:p-6 xl:w-[490px]">
              <div className="portrait:pb-4">
                <h4 className="font-nav-text tracking-widest text-secondary">
                  AVG.DISTANCE
                </h4>
                <h2 className="font-bellefair text-3xl">
                  {distance.toUpperCase()}
                </h2>
              </div>
              <div>
                <h4 className="font-nav-text tracking-widest text-secondary">
                  EST. TRAVEL TIME
                </h4>
                <h2 className="font-bellefair text-3xl">
                  {travel.toUpperCase()}
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
