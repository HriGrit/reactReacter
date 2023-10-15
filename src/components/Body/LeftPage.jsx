import React from "react";
import lpic1 from "../../assets/leftArticle/lpic1.svg";
import article from "../../assets/leftArticle/article.svg";
import dots from "../../assets/leftArticle/dots.svg";
import authorpic from "../../assets/leftArticle/authorpic.svg";
import eye from "../../assets/leftArticle/eye.svg";
import share from "../../assets/leftArticle/share.svg";

const LeftPage = () => {
    return (
        <div className="w-[48.05%] mt-[28px] mm:ml-[13.8%] sm:max-mm:ml-[20px] sm:ml-0 flex flex-col">
            <div className="w-full h-fit bg-white rounded border border-neutral-200">
                <img src={lpic1} alt="article_lpic1" />

                <div className="pl-[20px] pr-[10px]">
                    <div>
                        <img className="mt-[20px]" src={article} alt="article" />
                    </div>

                    <div className="w-fill text-black text-[22px] font-semibold font-['IBM Plex Sans'] leading-[29.52px] mt-[10px] flex flex-rows justify-between mr-[24px]">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                        <img
                            src={dots}
                            alt="dots"
                            className="mt-[11px] relative right-[0] align-top"
                        ></img>
                    </div>

                    <div className="w-fit text-zinc-600 text-[19px] font-normal font-['IBM Plex Sans'] mt-[12px] mr-[24px]">
                        I've worked in UX for the better part of a decade. From now on, I plan to rei…
                    </div>

                    <div className="flex items-center w-full relative bottom-[20px]">
                        <img
                            className="w-12 h-12 rounded-3xl mt-[32px] mr-2"
                            src={authorpic}
                            alt="Author Pic"
                        />
                        <div className="text-black text-lg font-semibold font-['IBM Plex Sans'] mt-[44px]">
                            Sarthak Kamra
                        </div>
                        <div className="flex items-center ml-auto sm:mm:ml-[5px] absolute bottom-[3%] right-[3%]">
                            <img
                                className="w-4 h-4 mr-1"
                                src={eye}
                                alt="Eye Icon"
                            />
                            <p className="text-neutral-600 text-sm font-medium font-['IBM Plex Sans'] whitespace-nowrap mt-[12px] lg:mr-[40px] sm:mr-[10px]">
                                1.4k views
                            </p>
                            <div className="min-w-8 h-8 bg-gray-100 rounded-sm">
                                <img
                                    className="w-4 h-4 relative mx-2 my-2"
                                    src={share}
                                    alt="Share Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-white rounded border border-neutral-200 mt-[20px]">
                <img src={lpic1} alt="article_lpic1" />

                <div className="pl-[20px] pr-[10px]">
                    <div>
                        <img className="mt-[20px]" src={article} alt="article" />
                    </div>

                    <div className="w-fill text-black text-[22px] font-semibold font-['IBM Plex Sans'] leading-[29.52px] mt-[10px] flex flex-rows justify-between mr-[24px]">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                        <img
                            src={dots}
                            alt="dots"
                            className="mt-[11px] relative right-[0] align-top"
                        ></img>
                    </div>

                    <div className="w-fit text-zinc-600 text-[19px] font-normal font-['IBM Plex Sans'] mt-[12px] mr-[24px]">
                        I've worked in UX for the better part of a decade. From now on, I plan to rei…
                    </div>

                    <div className="flex items-center w-full relative bottom-[20px]">
                        <img
                            className="w-12 h-12 rounded-3xl mt-[32px] mr-2"
                            src={authorpic}
                            alt="Author Pic"
                        />
                        <div className="text-black text-lg font-semibold font-['IBM Plex Sans'] mt-[44px]">
                            Sarthak Kamra
                        </div>
                        <div className="flex items-center ml-auto sm:mm:ml-[5px] absolute bottom-[3%] right-[3%]">
                            <img
                                className="w-4 h-4 mr-1"
                                src={eye}
                                alt="Eye Icon"
                            />
                            <p className="text-neutral-600 text-sm font-medium font-['IBM Plex Sans'] whitespace-nowrap mt-[12px] lg:mr-[40px] sm:mr-[10px]">
                                1.4k views
                            </p>
                            <div className="min-w-8 h-8 bg-gray-100 rounded-sm">
                                <img
                                    className="w-4 h-4 relative mx-2 my-2"
                                    src={share}
                                    alt="Share Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-white rounded border border-neutral-200 mt-[20px]">
                <img src={lpic1} alt="article_lpic1" />

                <div className="pl-[20px] pr-[10px]">
                    <div>
                        <img className="mt-[20px]" src={article} alt="article" />
                    </div>

                    <div className="w-fill text-black text-[22px] font-semibold font-['IBM Plex Sans'] leading-[29.52px] mt-[10px] flex flex-rows justify-between mr-[24px]">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                        <img
                            src={dots}
                            alt="dots"
                            className="mt-[11px] relative right-[0] align-top"
                        ></img>
                    </div>

                    <div className="w-fit text-zinc-600 text-[19px] font-normal font-['IBM Plex Sans'] mt-[12px] mr-[24px]">
                        I've worked in UX for the better part of a decade. From now on, I plan to rei…
                    </div>

                    <div className="flex items-center w-full relative bottom-[20px]">
                        <img
                            className="w-12 h-12 rounded-3xl mt-[32px] mr-2"
                            src={authorpic}
                            alt="Author Pic"
                        />
                        <div className="text-black text-lg font-semibold font-['IBM Plex Sans'] mt-[44px]">
                            Sarthak Kamra
                        </div>
                        <div className="flex items-center ml-auto sm:mm:ml-[5px] absolute bottom-[3%] right-[3%]">
                            <img
                                className="w-4 h-4 mr-1"
                                src={eye}
                                alt="Eye Icon"
                            />
                            <p className="text-neutral-600 text-sm font-medium font-['IBM Plex Sans'] whitespace-nowrap mt-[12px] lg:mr-[40px] sm:mr-[10px]">
                                1.4k views
                            </p>
                            <div className="min-w-8 h-8 bg-gray-100 rounded-sm">
                                <img
                                    className="w-4 h-4 relative mx-2 my-2"
                                    src={share}
                                    alt="Share Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-white rounded border border-neutral-200 mt-[20px]">

            </div>
        </div>
    );
};

export default LeftPage;
