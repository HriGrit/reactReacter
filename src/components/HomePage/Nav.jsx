import React from "react";
import dropArrow from "../../assets/dropArrow.svg";
import groupjoin from "../../assets/groupjoin.svg";

const Nav = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[358px] h-[21px] relative mm:left-[13.8%] sm:max-mm:ml-[20px] sm:left-0 mt-[47px]">
        <div className="AllPosts32 left-0 top-0 absolute text-black text-base font-normal font-['IBM Plex Sans']">
          All Posts(32)
        </div>
        <div className="hidden sm:block Article left-[113px] top-0 absolute text-zinc-500 text-base font-normal font-['IBM Plex Sans']">
          Article
        </div>
        <div className="hidden sm:block Event left-[180px] top-0 absolute text-zinc-500 text-base font-normal font-['IBM Plex Sans']">
          Event
        </div>
        <div className="hidden sm:block Education left-[239px] top-0 absolute text-zinc-500 text-base font-normal font-['IBM Plex Sans']">
          Education
        </div>
        <div className="hidden sm:block Job left-[331px] top-0 absolute text-zinc-500 text-base font-normal font-['IBM Plex Sans']">
          Job
        </div>
      </div>

      <div className="flex justify-end w-full relative right-[13.8%] mt-[40px] items-center sm:max-mm:right-[15.9%]">
        <div className="w-[133px] h-9 relative mr-[16px]">
          <div className="w-[133px] h-9 left-0 top-0 absolute bg-gray-100 rounded" />
          <div className="WriteAPost left-[12px] top-[8px] absolute text-black text-[15px] font-medium font-['IBM Plex Sans']">
            Write a Post
          </div>
          <div className="w-[22px] h-[22px] left-[105px] top-[7px] absolute">
            <img src={dropArrow} alt="somthn" />
          </div>
        </div>
        <div className="w-[125px] h-9 bg-blue-600 rounded flex flex-row">
          <div className="BaselineGroupAdd24px w-[22px] h-[22px] ml-[10px] my-[7px] mr-[6px]">
            <img src={groupjoin} alt="somthn" />
          </div>
          <div className="JoinGroup text-white text-[15px] font-medium font-['IBM Plex Sans'] my-[7px]">
            Join Group
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
