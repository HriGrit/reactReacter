import React from "react";
import posterbg from "../../assets/posterbg.svg";
import "../../assets/fonts/fonts.css";

const Poster = ({ createAccount }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${posterbg})`,
        }}
        className="sm:pl-[13.8%] w-full h-[440px] sm:w-full bg-no-repeat bg-center bg-cover"
      >
        <div className="flex flex-col">
          <div className="flex absolute right-[20px] top-[10px] border-1 p-2 rounded-sm">
            <button onClick={createAccount}>
              <div className=" text-white"> Join Group </div>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="sm:pt-[286px] pt-[306px] text-white text-4xl font-bold font-['IBM Plex Sans'] pl-[7.8%]">
              Computer Engineering
            </div>
            <div className="pl-[7.8%] text-white text-lg font-normal font-['IBM Plex Sans']">
              142,765 Computer Engineers follow this
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poster;
