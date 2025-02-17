import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function Video() {
  const Ref = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline();
      tl1.fromTo(
        Ref.current,
        { x: -300 },
        {
          x: 0,
          ease: "power4.inOut",
          duration: 2,
          delay: 2,
        }
      );
    },
    { scope: Ref }
  );

  return (
    <div ref={Ref} className="flex justify-center items-center relative ">
      <div
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 64%, 100% 100%, 15% 100%, 0 88%)",
        }}
        className="w-80 h-24 "
      >
        <video
          className="w-full h-full object-cover"
          src="CyberTrailer.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 21% 100%)",
        }}
        className="bg-red-700 absolute w-48 h-5 flex justify-center items-center right-0 -bottom-5 cursor-pointer"
      >
        <h1 className="text-center text-sm text-white font-bold">
          View Trailer
        </h1>
      </div>
    </div>
  );
}

export default Video;
