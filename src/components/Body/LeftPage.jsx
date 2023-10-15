import React from "react";
import lpic1 from "../../assets/leftArticle/lpic1.svg";
import article from "../../assets/leftArticle/article.svg";
import dots from "../../assets/leftArticle/dots.svg";
import authorpic from "../../assets/leftArticle/authorpic.svg";
import eye from "../../assets/leftArticle/eye.svg";
import share from "../../assets/leftArticle/share.svg";
import bag from "../../assets/leftArticle/bag.svg";
import job from "../../assets/leftArticle/job.svg";
import location from "../../assets/rightArticle/location.svg";

const LeftPage = () => {
    return (
        <div className="w-[48.05%] mt-[28px] mm:ml-[13.8%] sm:max-mm:ml-[20px] sm:ml-0 flex flex-col es:max-sm:w-full">
            <div className="w-full h-fit bg-white rounded border border-neutral-200">
                <img className="w-full" src={lpic1} alt="article_lpic1" />

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
                        <div className="flex flex-row items-center ml-auto sm:mm:ml-[5px] justify-between pt-[40px]">
                            <img
                                className="w-4 h-4 mr-1 es:max-sm:hidden"
                                src={eye}
                                alt="Eye Icon"
                            />
                            <p className="text-neutral-600 text-sm font-medium font-['IBM Plex Sans'] whitespace-nowrap mt-[12px] lg:mr-[40px] sm:mr-[10px] es:max-sm:hidden">
                                1.4k views
                            </p>
                            <div className="min-w-8 h-8 es:max-sm:h-[50px] bg-gray-100 rounded-sm flex flex-row">
                                <img
                                    className="w-4 h-4 relative mx-2 my-2 es:max-sm:w-full es:max-sm:h-8"
                                    src={share}
                                    alt="Share Icon"
                                />
                                <p className="hidden es:max-sm:block es:max-sm:my-3 es:max-sm:pr-2">Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-white rounded border border-neutral-200 mt-[20px]">
                <img className="w-full" src={lpic1} alt="article_lpic1" />

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
                        <div className="flex flex-row items-center ml-auto sm:mm:ml-[5px] justify-between pt-[40px]">
                            <img
                                className="w-4 h-4 mr-1 es:max-sm:hidden"
                                src={eye}
                                alt="Eye Icon"
                            />
                            <p className="text-neutral-600 text-sm font-medium font-['IBM Plex Sans'] whitespace-nowrap mt-[12px] lg:mr-[40px] sm:mr-[10px] es:max-sm:hidden">
                                1.4k views
                            </p>
                            <div className="min-w-8 h-8 es:max-sm:h-[50px] bg-gray-100 rounded-sm flex flex-row">
                                <img
                                    className="w-4 h-4 relative mx-2 my-2 es:max-sm:w-full es:max-sm:h-8"
                                    src={share}
                                    alt="Share Icon"
                                />
                                <p className="hidden es:max-sm:block es:max-sm:my-3 es:max-sm:pr-2">Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-white rounded border border-neutral-200 mt-[20px]">
                <img className="w-full" src={lpic1} alt="article_lpic1" />

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
                        <div className="flex flex-row items-center ml-auto sm:mm:ml-[5px] justify-between pt-[40px]">
                            <img
                                className="w-4 h-4 mr-1 es:max-sm:hidden"
                                src={eye}
                                alt="Eye Icon"
                            />
                            <p className="text-neutral-600 text-sm font-medium font-['IBM Plex Sans'] whitespace-nowrap mt-[12px] lg:mr-[40px] sm:mr-[10px] es:max-sm:hidden">
                                1.4k views
                            </p>
                            <div className="min-w-8 h-8 es:max-sm:h-[50px] bg-gray-100 rounded-sm flex flex-row">
                                <img
                                    className="w-4 h-4 relative mx-2 my-2 es:max-sm:w-full es:max-sm:h-8"
                                    src={share}
                                    alt="Share Icon"
                                />
                                <p className="hidden es:max-sm:block es:max-sm:my-3 es:max-sm:pr-2">Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-white rounded border border-neutral-200 mt-[20px]">
                <img className="ml-[20px] mt-[20px]" src={job} alt="job"></img>
                <div className="flex flex-row ml-[20px] mr-[20px] mt-[10px] w-full">
                    <div className="SoftwareDeveloper w-[600px] text-black text-[22px] font-semibold font-['IBM Plex Sans'] leading-[29.60px]">Software Developer</div>
                    <img src={dots} alt="dots"></img>
                </div>
                <div className="flex flex-row ml-[20px] mr-[20px] mt-[12px]">
                    <div className="flex flex-row">
                        <img src={bag} alt="bag"></img>
                        <div className="InnovaccerAnalyticsPrivateLtd text-black text-[15px] font-medium font-['IBM Plex Sans'] ml-[4px] mr-[40px]">Innovaccer Analytics Private Ltd.</div>
                    </div>
                    <div className="flex flex-row">
                        <img src={location} alt="location"></img>
                        <div className="NoidaIndia text-black text-[15px] font-medium font-['IBM Plex Sans'] ml-[4px]">Noida, India</div>
                    </div>
                </div>
                <div className="Rectangle2 w-fill h-9 bg-white rounded-[10px] border border-gray-400 ml-[20px] mr-[20px] mt-[16px]">
                    <div className="ApplyOnTimesjobs text-center text-emerald-500 text-[13px] font-semibold font-['IBM Plex Sans'] leading-[18.25px] py-[9px]">Apply on Timesjobs</div>
                </div>
                <div className="flex flex-row justify-between ml-[20px] mr-[20px] mt-[32px] mb-[15px]">
                    <div className="flex flex-row">
                        <img src={authorpic} alt="person"></img>
                        <div className="JosephGray text-black text-lg font-semibold font-['IBM Plex Sans'] py-[12px]">Joseph Gray</div>
                    </div>
                    <div className="flex flex-row mt-[15px] ml-[40%] w-fit whitespace-nowrap es:max-sm:hidden">
                        <div className="IconActionVisibility24px w-[18px] h-[18px] relative flex flex-col items-start justify-end inline-flex">
                            <img className="IconActionVisibility24px w-[16.50px] h-[11.25px]" src={eye} alt="eye" />
                        </div>

                        <div className="4kViews text-right text-neutral-600 text-sm font-medium font-['IBM Plex Sans']">1.4k views</div>
                    </div>
                    <div className="min-w-8 h-8 es:max-sm:h-[50px] bg-gray-100 rounded-sm flex flex-row">
                        <img
                            className="w-4 h-4 relative mx-2 my-2 es:max-sm:w-full es:max-sm:h-8"
                            src={share}
                            alt="Share Icon"
                        />
                        <p className="hidden es:max-sm:block es:max-sm:my-3 es:max-sm:pr-2">Share</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPage;
