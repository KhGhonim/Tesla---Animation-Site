import React from "react";
import Explore from "./Explore";
import Logo from "./Logo";
import Video from "./Video";

function Navbar() {
  return (
    <div className="w-full absolute z-20 top-5 right-0  left-0 px-10  flex items-center justify-between">
      <Explore />
      <Logo />
      <Video />
    </div>
  );
}

export default Navbar;
