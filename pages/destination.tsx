import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BGProvider } from "../components/bgprovider";
import DestinationRenderer from "../components/destinations/destinationcomponent";
import { imagePaths } from "../components/imagepaths";
import { NavBar } from "../components/navbar/navbar";

export default function Destination() {
  return (
    <BGProvider bgimage={imagePaths.destination.background}>
      <Head>
        <title>Destinations</title>
      </Head>
      <NavBar/>
      <div className="w-screen portrait:text-center portrait:pt-4 landscape:px-32 landscape:pt-16 portrait:">
        <h1 className="font-nav-text portrait:text-xl landscape:text-3xl tracking-widest"><span className="text-accent/50">01</span>  PICK YOUR DESTINATION</h1>
      </div>
      <DestinationRenderer/>
    </BGProvider>
  )
}