"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import Cyber from "../Cyber/Cyber";

gsap.registerPlugin(useGSAP);

function CyberTruckLoader() {
  const [ShowHeroSection, setShowHeroSection] = useState(false);
  const Ref = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onUpdate: function () {
          if (tl.progress() >= 0.5) {
            setShowHeroSection(true);
          }
        },
      });
      // CyberTruck animation
      tl.fromTo(
        "#CyberTruck",
        { scale: 3, opacity: 0 },
        { opacity: 1, scale: 1.3, duration: 3, ease: "power4.inOut" }
      ).to("#CyberTruck", {
        delay: 1,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.inOut",
      });

      // Text Animation
      tl.fromTo(
        ["#CYBERBEAST", "#ALL-WHEEL", "#AUTONOMOUS"],
        { scale: 0.5, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          stagger: 0.2,
          ease: "power4.inOut",
        }
      ).to(
        ["#CYBERBEAST", "#ALL-WHEEL", "#AUTONOMOUS"],
        {
          delay: 2,
          opacity: 1,
          scale: 0.7,
          duration: 1.5,
          x: 100,

          ease: "power4.inOut",
        },
        "-=3.5"
      );

      // Loader bars animation
      tl.fromTo(
        [
          "#CyberTruckLoader1",
          "#CyberTruckLoader2",
          "#CyberTruckLoader3",
          "#CyberTruckLoader4",
        ],
        { yPercent: 0 },
        {
          yPercent: 100,
          stagger: 0.3,
          ease: "power3.inOut",
          duration: 1.8,
        },
        "-=4"
      );
    },
    { scope: Ref }
  );

  return (
    <div className="w-dvw h-dvh relative overflow-hidden">
      <div ref={Ref} className="relative w-dvw h-dvh overflow-hidden">
        <div
          id="CyberTruckLoader1"
          className="absolute w-1/4 h-dvh top-0 left-0 z-40 bg-red-700"
        ></div>
        <div
          id="CyberTruckLoader2"
          className="absolute w-1/4 h-dvh top-0 left-1/4 z-40 bg-red-700"
        ></div>
        <div
          id="CyberTruckLoader3"
          className="absolute w-1/4 h-dvh top-0 left-2/4 z-40 bg-red-700"
        ></div>
        <div
          id="CyberTruckLoader4"
          className="absolute w-1/4 h-dvh top-0 left-3/4 z-40 bg-red-700"
        ></div>
        <div className="absolute top-1/2 left-1/2 flex flex-col gap-4 translate-x-[-50%] translate-y-[-50%] z-50">
          <div id="CyberTruck">
            <Image
              id="CyberTruck"
              src="/CYBERTRUCK.svg"
              width={500}
              height={500}
              priority={true}
              loading="eager"
              quality={100}
              alt="CyberTruck"
            />
          </div>
          <div className="flex flex-row justify-between gap-3.5 min-w-96 text-xs text-white capitalize">
            <div>
              <h1 id="CYBERBEAST" className="">
                CYBERBEAST
              </h1>
            </div>
            <div>
              <h1 id="ALL-WHEEL">ALL-WHEEL DRIVE</h1>
            </div>{" "}
            <div>
              <h1 id="AUTONOMOUS">AUTONOMOUS</h1>
            </div>
          </div>
        </div>
      </div>

      {ShowHeroSection && <Cyber />}
    </div>
  );
}

export default CyberTruckLoader;
