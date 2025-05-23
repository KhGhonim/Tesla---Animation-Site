import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
gsap.registerPlugin(useGSAP);

function Cyber() {
  const Ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#CyberBG",
        {
          top: "1.5rem",
          right: "1.5rem",
          bottom: "1.5rem",
          left: "1.5rem",
        },
        {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          duration: 1.5,
          ease: "power4.inOut",
          delay: 4.8,
        }
      );
    },
    { scope: Ref }
  );
  return (
    <div ref={Ref} className="w-dvw h-dvh absolute inset-0 bg-amber-700 ">
      <div id="CyberBG" className="absolute inset-3.5  ">
        <Navbar />
        <HeroSection />
        <Image
          src="/Mask group.png"
          className="absolute inset-0 z-50 w-full h-full object-cover"
          alt="Tesla Off Light Mobil"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default Cyber;
