import Image from "next/image";
import React, { DetailedHTMLProps, FC, MouseEventHandler, useRef } from "react";
import { content } from "../content";

export const CrewComponent: FC = () => {
  const crew = content.crew;

  function firstDot(index: number) {
    if (index === 0)
      return (
        <div className="w-4 inline-block h-4 bg-accent rounded-full m-1"></div>
      );
    else
      return (
        <div className="w-4 inline-block h-4 bg-accent/50 rounded-full m-1"></div>
      );
  }

  function secondDot(index: number) {
    if (index === 1)
      return (
        <div className="w-4 inline-block h-4 bg-accent rounded-full m-1"></div>
      );
    else
      return (
        <div className="w-4 inline-block h-4 bg-accent/50 rounded-full m-1"></div>
      );
  }
  function thirdDot(index: number) {
    if (index === 2)
      return (
        <div className="w-4 inline-block h-4 bg-accent rounded-full m-1"></div>
      );
    else
      return (
        <div className="w-4 inline-block h-4 bg-accent/50 rounded-full m-1"></div>
      );
  }
  function fourthDot(index: number) {
    if (index === 3)
      return (
        <div className="w-4 inline-block h-4 bg-accent rounded-full m-1"></div>
      );
    else
      return (
        <div className="w-4 inline-block h-4 bg-accent/50 rounded-full m-1"></div>
      );
  }

  return (
    <div className=" overflow-x-scroll overflow-y-hidden w-screen whitespace-nowrap snap-x portrait:flex portrait:flex-row portrait:w-screen">
      {crew.map((crewMember, index) => (
        <div
          id={`id${index}`}
          key={crewMember.name}
          className="inline-block portrait:text-center md:w-auto lg:w-screen portrait:block portrait:w-auto snap-center w-screen snap-mandatory"
        >
          <div className="flex flex-row portrait:flex-col-reverse w-full portrait:w-screen">
            <div className="w-1/2 portrait:w-full portrait:pt-6 whitespace-normal flex flex-col portrait:flex-col-reverse p-24 portrait:p-0 justify-around">
              <div className="flex justify-around flex-col">
                <h2 className="text-4xl text-accent/50 font-bellefair portrait:text-2xl uppercase">
                  {crew[index].role}
                </h2>
                <h1 className="text-6xl py-6 font-bellefair uppercase portrait:text-4xl">
                  {crew[index].name}
                </h1>
                <p className="w-4/5 text-justify portrait:text-center portrait:w-full portrait:px-16 portrait:pb-10">
                  {crew[index].bio}
                </p>
              </div>
              <div className="">
                <button
                  className="p-2"
                  onClick={() => {
                    const element = document.getElementById(`id${0}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {firstDot(index)}
                </button>
                <button
                  className="p-2"
                  onClick={() => {
                    const element = document.getElementById(`id${1}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {secondDot(index)}
                </button>
                <button
                  className="p-2"
                  onClick={() => {
                    const element = document.getElementById(`id${2}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {thirdDot(index)}
                </button>
                <button
                  className="p-2"
                  onClick={() => {
                    const element = document.getElementById(`id${3}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {fourthDot(index)}
                </button>
              </div>
            </div>
            <hr className="hidden portrait:block portrait:w-4/5 text-accent/30 self-center" />
            <div className="portrait:w-2/3 portrait:self-center portrait:pt-4">
              <Image
                src={crew[index].images.webp}
                height="700px"
                width="700px"
                loading="eager"
                alt={crew[index].name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
