import Image from "next/image";
import React, { FC } from "react";
import Media from "react-media";
import { imagePaths } from "./imagepaths";

interface BgProviderProps {
  children: React.ReactNode;
  bgimage: bgimageInterface;
}

interface bgimageInterface {
  desktop: string;
  mobile: string;
  tablet: string;
}

export const BGProvider: FC<BgProviderProps> = ({ bgimage, children}) => {
  const mediaqueries = {
    small: "(max-width: 600px)",
    medium: "(min-width: 601px) and (max-width: 1200px)",
    large: "(min-width: 1200px)",
  };

  
  return (
    <>
      <Media queries={mediaqueries}>
        {(matches) => (
          <>
            {matches.small && (
              <div
                style={{
                  background: `url(${bgimage.mobile})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="min-h-screen absolute min-w-full overflow-x-hidden"
              >
                {children}
              </div>
            )}
            {matches.medium && (
              <div
                style={{
                  background: `url(${bgimage.tablet})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="min-h-screen absolute min-w-full overflow-x-hidden"
              >
                {children}
              </div>
            )}
            {matches.large && (
              <div
                style={{
                  background: `url(${bgimage.desktop})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="min-h-screen overflow-scroll overflow-x-hidden"
              >
                {children}
              </div>
            )}
          </>
        )}
      </Media>
      {/* <div className="absolute">
        {children}
      </div> */}
    </>
  );
};
