import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function Logo() {
  const Ref = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline();
      tl1
        .fromTo(
          "#Logo",
          { opacity: 0, y: -200, scale: 0.5 },
          {
            opacity: 1,
            scale: 1.5,
            y: 200,
            ease: "power4.inOut",
            duration: 2,
            delay: 2,
          }
        )
        .to("#Logo", {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power4.inOut",
          duration: 1.5,
          delay: 0.5,
        });
    },
    { scope: Ref }
  );

  return (
    <div ref={Ref} className="flex  justify-center items-center">
      <Image
        id="Logo"
        src={"/Tesla Final Logo.svg"}
        width={100}
        height={100}
        alt="Tesla Final Logo"
        className="w-12 h-12 object-cover"
      />
    </div>
  );
}

export default Logo;
