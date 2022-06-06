import Image from "next/image"
import { FC, Fragment } from "react";
import Media from "react-media";
import { imagePaths } from "../imagepaths";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";

export const NavBar: FC = () => {
  const mediaqueries = {
    small: "(max-width: 600px)",
    medium: "(min-width: 601px) and (max-width: 1200px)",
    large: "(min-width: 1200px)",
  };

  return (
    <div className=" flex flex-row justify-between items-center mt-12">
      <div className="pl-20 portrait:pl-8">
        <Image src={imagePaths.shared.logo.svg} height='48px' width='48px' alt=''/>
      </div>
      <Media queries={mediaqueries}>
        {matches => (
          <Fragment>
            {matches.small && <MobileNav />}
            {matches.medium && <DesktopNav />}
            {matches.large && <DesktopNav />}
          </Fragment>
        )}
      </Media>
    </div>
  );
}