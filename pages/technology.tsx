import Head from "next/head";
import { useEffect, useState } from "react";
import { BGProvider } from "../components/bgprovider";
import { content } from "../components/content";
import { imagePaths } from "../components/imagepaths";
import { NavBar } from "../components/navbar/navbar";
import TechnologyComponent from "../components/technology/technologycomponent";

function Technology() {
  const [index, changeIndex] = useState(0);
  useEffect(() => {
    console.log(index);
  }, [index]);
  return (
    <BGProvider bgimage={imagePaths.technology.background}>
      <Head>
        <title>Technology</title>
      </Head>

      <NavBar />
      <div className="w-screen portrait:text-center portrait:pt-4 landscape:pl-32 landscape:pt-16 ">
        <h1 className="font-nav-text portrait:text-xl landscape:text-3xl tracking-widest">
          <span className="text-accent/50">03</span> SPACE LAUNCH 101
        </h1>
        <TechnologyComponent
          changeIndex={changeIndex}
          index={index}
          pages={3}
        />
      </div>
    </BGProvider>
  );
}

export default Technology;
