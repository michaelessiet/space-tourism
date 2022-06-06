/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { FC } from "react";
import { imagePaths } from "../imagepaths";
import { motion } from "framer-motion";
import Link from "next/link";

export const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(imagePaths.shared.icon.hamburger);

  const clickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
      setIcon(imagePaths.shared.icon.hamburger);
    }
    if (!isOpen) {
      setIsOpen(true);
      setIcon(imagePaths.shared.icon.close);
    }
  };

  const DrawerDisplay = () => {
    if (isOpen)
      return (
        <motion.div
          className="z-10 fixed top-0 right-0 w-3/5 h-screen backdrop-blur-lg bg-accent/5"
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "block" }}
        >
          <ul className="flex h-full flex-col justify-start p-10 py-40">
            <Link href="/" className="hover:cursor-pointer">
              <li className={`h-16`}>
                <div className="tracking-widest text-xl font-thin font-nav-text">
                  <span className="font-nav-text font-bold pr-2 tracking-widest">
                    00
                  </span>
                  HOME
                </div>
              </li>
            </Link>
            <Link href="/destination" className="hover:cursor-pointer">
              <li className={`h-16`}>
                <div className="tracking-widest font-nav-text text-xl">
                  <span className="font-nav-text font-bold pr-2 tracking-widest">
                    01
                  </span>
                  DESTINATION
                </div>
              </li>
            </Link>
            <Link href="/crew" className="hover:cursor-pointer">
              <li className={`h-16`}>
                <div className=" tracking-widest font-nav-text text-xl">
                  <span className="font-nav-text font-bold pr-2 tracking-widest">
                    02
                  </span>
                  CREW
                </div>
              </li>
            </Link>
            <Link href="/technology" className="hover:cursor-pointer">
              <li className={`h-16`}>
                <div className=" tracking-widest font-nav-text text-xl">
                  <span className="font-nav-text font-bold pr-2 tracking-widest">
                    03
                  </span>
                  TECHNOLOGY
                </div>
              </li>
            </Link>
          </ul>
        </motion.div>
      );
    if (!isOpen) return null;
  };

  return (
    <div className="">
      <button className="fixed right-8 top-14 z-50" onClick={clickHandler}>
        <Image src={icon} height="24px" width="24px" alt="hamburger menu" />
      </button>
      {DrawerDisplay()}
    </div>
  );
};
