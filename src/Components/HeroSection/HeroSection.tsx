import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-full">
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
