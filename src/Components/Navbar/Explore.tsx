import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function Explore() {
  const Ref = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline();
      tl1.fromTo(
        "#Explore",
        { opacity: 0, x: -100, background: "black" },
        {
          opacity: 1,
          x: 0,
          ease: "power4.inOut",
          background: "transparent",
          duration: 1,
          delay: 4,
        }
      );
      tl1.fromTo(
        "#ProfileIcon",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power4.inOut", duration: 2 },
        "-=0.7"
      );
      tl1.fromTo(
        "#GlobeIcon",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power4.inOut", duration: 2 },
        "-=2"
      );
    },
    { scope: Ref }
  );
  return (
    <div ref={Ref} className="flex gap-6 justify-center items-center  ">
      <div
        id="Explore"
        className="w-72 h-14 flex justify-center items-center rounded-md hover:bg-red-600 duration-300 ease-in-out transition-all cursor-pointer  relative text-white bg-transparent text-center"
      >
        <h1 className="text-2xl  font-bold">Explore</h1>
        <FaPlus className="absolute top-0 left-0  w-1.5" />
        <FaPlus className="absolute top-0 right-0  w-1.5" />
        <FaPlus className="absolute bottom-0 left-0  w-1.5" />
        <FaPlus className="absolute bottom-0 right-0  w-1.5" />
      </div>
      <div
        id="ProfileIcon"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 64%, 100% 100%, 25% 100%, 0 75%)",
        }}
        className="w-12 h-12 cursor-pointer bg-gray-50 flex justify-center items-center"
      >
        <HiOutlineUserCircle className="w-6 h-6" />
      </div>
      <div id="GlobeIcon" className="w-5 h-5 cursor-pointer">
        <CiGlobe className="w-full h-full text-white" />
      </div>
    </div>
  );
}

export default Explore;
