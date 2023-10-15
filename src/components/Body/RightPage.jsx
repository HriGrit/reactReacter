import React from "react";
import location from "../../assets/rightArticle/location.svg";
import edit from "../../assets/rightArticle/edit.svg";
import info from "../../assets/rightArticle/info.svg";

const RightPage = () => {
  return (
    <div className="hidden sm:block flex flex-col mt-[56px] text-right mr-[13.8%] ml-[7.2%]">
      <div className="flex flex-row">
        <div>
          <img
            className="OutlineLocationOn24px2 w-[18px] h-[18px] relative"
            src={location}
            alt="location"
          />
        </div>
        <div className="NoidaIndia text-black text-sm font-normal font-['IBM Plex Sans'] w-[97px]">
          Noida, India
        </div>
        <div>
          <img
            className="BaselineEdit24px w-5 h-5 relative ml-[124px]"
            src={edit}
            alt="edit"
          />
        </div>
      </div>
      <div className="Line3 w-[243px] h-[0px] border border-zinc-400 mt-[10px]"></div>
      <div className="flex flex-row mt-[32px]">
        <img
          className="BaselineErrorOutline24px w-4 h-4 relative opacity-50"
          src={info}
          alt="info"
        />
        <div className="YourLocationWillHelpUsServeBetterAndExtendAPersonalisedExperience w-[220px] opacity-50 text-black text-xs font-normal font-['IBM Plex Sans']">
          Your location will help us serve better and extend a personalised
          experience.
        </div>
      </div>
    </div>
  );
};

export default RightPage;
