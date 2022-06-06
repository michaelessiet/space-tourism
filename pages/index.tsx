import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { imagePaths } from "../components/imagepaths";
import { NavBar } from "../components/navbar/navbar";
import React from "react";
import { BGProvider } from "../components/bgprovider";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  // const [bgImage, setBgImage] = React.useState(imagePaths.home.background.desktop)
  const mediaqueries = {
    small: "(max-width: 600px)",
    medium: "(min-width: 601px) and (max-width: 1200px)",
    large: "(min-width: 1200px)",
  };

  return (
    <BGProvider bgimage={imagePaths.home.background}>
      <NavBar />
      <div className="w-screen lg:mt-48 flex lg:flex-row portrait:flex-col md:flex-col justify-around items-center">
        <div className="2xl:w-1/3 xl:w-1/2 md:w-auto text-center p-32 md:p-20 bg portrait:p-4">
          <h3 className="text-3xl font-nav-text tracking-widest portrait:text-2xl portrait:p-4">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-[8rem] portrait:text-8xl portrait:p-4 font-bellefair">
            SPACE
          </h1>
          <p className=" text-justify portrait:p-4 portrait:text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <motion.div className="w-1/2 portrait:w-auto flex justify-center items-center">
          <Link href='/destination' >
            <div className=" bg-accent h-64 w-64 hover:shadow-2xl hover:shadow-accent transition-shadow rounded-full flex justify-center items-center">
              <h3 className="text-4xl font-bellefair text-primary">EXPLORE</h3>
            </div>
          </Link>
        </motion.div>
      </div>
    </BGProvider>
  );
};

export default Home;
