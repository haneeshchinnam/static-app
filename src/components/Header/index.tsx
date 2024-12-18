import React from "react";
import TitleLogo from "../TitleLogo";

const Header = () => {
  return (
    <main className="flex flex-col">
      <div className="flex">
      <section className="flex items-center">
        <TitleLogo />
        <p className="text-darkBlue text-3xl font-semibold mt-[1px]">ELBRIT</p>
      </section>
      <section className="flex items-center justify-center w-[8px] h-[8px] border-[1px] border-darkBlue rounded-full mt-1.5">
        <p className="text-[6px] text-darkBlue font-bold">R</p>
      </section>
      </div>
      <p className="text-darkRed text-[8px] -mt-1.5 font-semibold">ELBRIT LIFE SCIENCES PVT. LTD</p>
    </main>
  );
};

export default Header;
