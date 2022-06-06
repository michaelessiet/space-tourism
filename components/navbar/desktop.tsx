/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link"
import { useRouter } from "next/router";

export const DesktopNav = () => {
  const router = useRouter()

  function IfHome () {
    if(router.pathname == "/") return "border-b-2 border-b-accent";
  }

  function IfDestination() {
    if(router.pathname == "/destination") return "border-b-2 border-b-accent";
  }

  function IfCrew() {
    if(router.pathname == "/crew") return "border-b-2 border-b-accent";
  }

  function IfTechnology() {
    if(router.pathname == "/technology") return "border-b-2 border-b-accent";
  }

  return (
    <ul className=" flex flex-row justify-around w-3/5 h-24 xl:px-36 items-end backdrop-blur-lg bg-accent/5">
      <Link href='/' className="hover:cursor-pointer">
        <li
          className={`h-3/5 ${IfHome()} hover:border-b-2 hover:border-b-accent`}
        >
          <div className="tracking-widest font-nav-text text-base">
            <span className="font-nav-text font-bold pr-2 tracking-widest">
              00
            </span>
            HOME
          </div>
        </li>
      </Link>
      <Link href='/destination' className="hover:cursor-pointer">
        <li
        className={`h-3/5 ${IfDestination()}  hover:border-b-2 hover:border-b-accent/30`}
      >
        <div
          className="tracking-widest font-nav-text text-base"
        >
          <span className="font-nav-text font-bold pr-2 tracking-widest">
            01
          </span>
          DESTINATION
        </div>
      </li>
      </Link>
      <Link href='/crew' className="hover:cursor-pointer">
        <li
        className={`h-3/5 ${IfCrew()}  hover:border-b-2 hover:border-b-accent/30`}
      >
        <div className=" tracking-widest font-nav-text text-base">
          <span className="font-nav-text font-bold pr-2 tracking-widest">
            02
          </span>
          CREW
        </div>
      </li>
      </Link>
      <Link href='/technology' className="hover:cursor-pointer">
        <li
        className={`h-3/5 ${IfTechnology()}  hover:border-b-2 hover:border-b-accent/30`}
      >
        <div className=" tracking-widest font-nav-text text-base">
          <span className="font-nav-text font-bold pr-2 tracking-widest">
            03
          </span>
          TECHNOLOGY
        </div>
      </li>
      </Link>
    </ul>
  );
}