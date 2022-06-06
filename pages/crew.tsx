import Head from "next/head";
import { BGProvider } from "../components/bgprovider";
import { CrewComponent } from "../components/crew/crewcomponent";
import { imagePaths } from "../components/imagepaths";
import { NavBar } from "../components/navbar/navbar";

export default function Crew() {
  return (
    <>
      <BGProvider bgimage={imagePaths.crew.background}>
        <Head>
          <title>Crew</title>
        </Head>
        <NavBar />
        <div className="w-screen portrait:text-center portrait:pt-4 landscape:px-32 landscape:pt-16 portrait:">
          <h1 className="font-nav-text portrait:text-xl landscape:text-3xl tracking-widest">
            <span className="text-accent/50">02</span> MEET YOUR CREW
          </h1>
        </div>
        <CrewComponent/>
      </BGProvider>
    </>
  );
}