"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaPlus } from "react-icons/fa";
gsap.registerPlugin(useGSAP);
function HeroSection() {
  const Ref = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline();
      const tl2 = gsap.timeline();
      const tl3 = gsap.timeline();
      const tl4 = gsap.timeline();
      const tl5 = gsap.timeline({
        onUpdate: () => {
          if (tl5.progress() >= 0.80) {
            gsap.fromTo("#Explore", { opacity: 0 }, { opacity: 1 });
          }
        },
      });
      tl1.fromTo(
        "#CyberMountain",
        {
          top: "50%",
          right: "50%",
          left: "50%",
          opacity: 1,
        },
        {
          top: "25%",
          right: "50%",
          left: "50%",
          opacity: 0,
          duration: 2,
          ease: "power4.inOut",
          delay: 4.5,
        }
      );
      tl2.fromTo(
        "#MOUNTAINS",
        {
          top: "50%",
          right: "50%",
          left: "50%",
          opacity: 0,
        },
        {
          top: "25%",
          right: "50%",
          left: "50%",
          opacity: 1,
          duration: 2,
          ease: "power4.inOut",
          delay: 4.5,
        }
      );
      tl3.fromTo(
        "#IconsRight",
        {
          top: "0%",
          right: "50%",
          opacity: 1,
        },
        {
          top: "0%",
          right: "0%",
          opacity: 1,
          duration: 2,
          ease: "power4.inOut",
          delay: 4.5,
        }
      );
      tl4.fromTo(
        "#IconsLeft",
        {
          top: "0%",
          left: "50%",
          opacity: 1,
        },
        {
          top: "0%",
          left: "0%",
          opacity: 1,
          duration: 2,
          ease: "power4.inOut",
          delay: 4.5,
        }
      );
      tl5
        .fromTo(
          [
            "#actualIconTopLeft",
            "#actualIconTopRight",
            "#actualIconBottomLeft",
            "#actualIconBottomRight",
          ],
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "power4.inOut", delay: 5 }
        )
        .fromTo(
          "#TextRedBG",
          { bottom: 0 },
          {
            opacity: 0,
            duration: 0.5,
            ease: "power4.inOut",
            top: 0,
            onUpdate: function () {
              if (tl5.progress() >= 0.6) {
                gsap.to("#Explore", { opacity: 1, duration: 0.5, ease: "power2.out" });
              }
            },
          }
        );
    },
    { scope: Ref }
  );

  return (
    <div ref={Ref} className="w-full h-full relative">
      <div className="absolute  top-[20%] left-[15%] text-white z-30 w-80 flex gap-6 justify-center items-center  ">
        <div
          id="TextRedBG"
          className="absolute  w-full bg-red-600 z-40 h-1.5"
        ></div>
        <div
          id="Explore"
          className="w-80 opacity-0 h-full flex flex-col justify-center items-center rounded-md  duration-300 ease-in-out transition-all cursor-pointer  relative text-white bg-transparent text-center"
        >
          <h1 className="text-base  font-bold">
            Designed to fit any environment
          </h1>
          <p className="text-xs text-left py-2 px-4">
            {" "}
            Durable and rugged enough to go anywhere. The adaptive electronic
            air suspension, with 305 mm of travel and 406 mm of ground
            clearance, meets all your needs.
          </p>
        </div>

        <FaPlus
          id="actualIconTopLeft"
          className="absolute top-0 left-0  w-1.5"
        />
        <FaPlus
          id="actualIconTopRight"
          className="absolute top-0 right-0  w-1.5"
        />
        <FaPlus
          id="actualIconBottomLeft"
          className="absolute bottom-0 left-0  w-1.5"
        />
        <FaPlus
          id="actualIconBottomRight"
          className="absolute bottom-0 right-0  w-1.5"
        />
      </div>
      <div className="absolute  top-[20%] left-[15%] text-white z-20 w-80 flex gap-6 justify-center items-center  ">
        <FaPlus id="IconsRight" className="absolute top-0 left-1/2 w-1.5" />
        <FaPlus id="IconsLeft" className="absolute top-0 right-1/2  w-1.5" />
      </div>

      <Image
        src="/SKY.svg"
        className="absolute top-0 left-0 right-0 w-full"
        alt="Tesla SKY"
        width={100}
        height={100}
      />

      <Image
        src="/CYBERTRUCK Mobil.svg"
        className="absolute top-1/2 z-10 w-full left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="Tesla Off Light Mobil"
        width={100}
        height={100}
      />
      <Image
        src="/MOUNTAINS.svg"
        className="absolute top-1/3 w-full left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="Tesla MOUNTAINS"
        width={100}
        height={100}
        id="MOUNTAINS"
      />
      <Image
        src="/MOUNTAINS RED.svg"
        className="absolute top-1/2 w-full left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="Tesla MOUNTAINS"
        width={100}
        height={100}
        id="CyberMountain"
      />

      <Image
        src="/GROUND.svg"
        className="absolute bottom-0 w-full left-0 right-0"
        alt="Tesla GROUND"
        width={100}
        height={100}
      />
    </div>
  );
}

export default HeroSection;
