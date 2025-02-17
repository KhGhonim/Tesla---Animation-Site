import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function Cyber() {
  const Ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#CyberBG",
        { margin: "0rem 0rem 15rem 5rem", duration: 3, ease: "power4.inOut" },
        { margin: "0rem", delay: 3, duration: 2, ease: "power4.inOut" }
      );
    },
    { scope: Ref }
  );
  return (
    <div ref={Ref} className="w-dvw h-dvh absolute inset-0 bg-red-600 ">
      <div id="CyberBG" className="absolute w-full h-full">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default Cyber;
