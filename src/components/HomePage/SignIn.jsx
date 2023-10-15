import React from 'react'
import cancel from '../../assets/cancel.svg'
import eye from "../../assets/leftArticle/eye.svg"
import f from "../../assets/f.svg"
import search from "../../assets/search.svg"
import art from "../../assets/art.svg"
import line from "../../assets/line.svg"
import vector from "../../assets/vector.svg"

const SignIn = ({ closeAccount }) => {
    return (
        <>
            <div>
                <div className='es:max-sm:hidden'>
                    <div>
                        <img className='fixed top-[20%] left-[77.3%] w-fit h-fit items-center justify-center z-50 cursor-pointer' onClick={closeAccount} src={cancel} alt="cancel"></img>
                    </div>
                    <div className='flex flex-col'>
                        <div className="fixed top-[25%] left-[21%] items-center justify-center z-50 w-[58.1%] h-fit pb-[36px] bg-white rounded-lg shadow">
                            <div className="Rectangle2 w-full h-[50px] bg-green-50 rounded-tl-lg rounded-tr-lg">
                                <div className="text-center text-green-700 text-sm font-medium font-['IBM Plex Sans'] leading-none py-[17px]">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
                            </div>
                            <div className='flex flex-row justify-between mt-[24px] ml-[36px]'>
                                <div className="text-black text-2xl font-bold font-['IBM Plex Sans'] mb-[24px]">Create Account</div>
                                <div className="text-right mt-[7px] mr-[36px]">
                                    <span className="text-neutral-700 text-[13px] font-normal font-['IBM Plex Sans']">Already have an account? </span>
                                    <span className="text-blue-600 text-[13px] font-semibold font-['IBM Plex Sans']">Sign In</span>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between ml-[36px] w-full'>
                                <div className='w-[47%]'>
                                    <div className="Rectangle2 h-[46px] bg-slate-50 rounded-tl-sm rounded-tr-sm border border-zinc-300 flex flex-row justify-around">
                                        <div className="FirstName text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]  whitespace-nowrap">First Name</div>
                                        <img className="flex flex-row" src={line} art="line"></img>
                                        <div className="LastName text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none py-[15px] whitespace-nowrap">Last Name</div>
                                    </div>
                                    <div className="Rectangle2 h-[46px] bg-slate-50 border border-zinc-300">
                                        <div className="Email text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]">Email</div>
                                    </div>
                                    <div className="Rectangle22  h-[46px] bg-slate-50 border border-zinc-300 flex flex-row justify-between">
                                        <div className="Password text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]">Password</div>
                                        <div className="w-fill h-[18px] relative flex-col justify-start items-start inline-flex py-[14px] pr-[18px]">
                                            <img className="" src={eye} alt="eye" />
                                        </div>
                                    </div>
                                    <div className="Rectangle21  h-[46px] bg-slate-50 rounded-bl-sm rounded-br-sm border border-zinc-300">
                                        <div className="ConfirmPassword text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]">Confirm Password</div>
                                    </div>
                                    <div className="Rectangle2  h-10 bg-blue-600 rounded-[20px] mb-[24px]">
                                        <div className="CreateAccount text-center text-white text-sm font-semibold font-['IBM Plex Sans'] leading-none mt-[19px] py-[12px]">Create Account</div>
                                    </div>
                                    <div className="Rectangle21  h-[38px] bg-white rounded-sm border border-zinc-300 flex flex-row items-center justify-center">
                                        <img className="FLogoRgbBlue1024 w-4 h-4" src={f} alt="facebook" />
                                        <div className="SignUpWithFacebook text-black text-sm font-normal font-['IBM Plex Sans'] leading-none ml-2">Sign up with Facebook</div>
                                    </div>
                                    <div className="Rectangle21  h-[38px] bg-white rounded-sm border border-zinc-300 flex flex-row items-center justify-center mt-[8px]">
                                        <img className="FLogoRgbBlue1024 w-4 h-4" src={search} alt="google" />
                                        <div className="SignUpWithFacebook text-black text-sm font-normal font-['IBM Plex Sans'] leading-none ml-2">Sign up with Google</div>
                                    </div>

                                </div>
                                <div className='mr-[36px] w-[47%]'>
                                    <div className="">
                                        <img className="h-80 pl-[30.80px] pt-[20.40px]" src={art} alt="art"></img>
                                        <div className="opacity-60 text-right text-black text-[11px] font-normal font-['IBM Plex Sans'] leading-none mr-[36px]">By signing up, you agree to our Terms & conditions, Privacy policy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='hidden es:max-sm:block'>
                    <div>
                        <img className='fixed top-[44%] left-[87.3%] w-fit h-fit items-center justify-center z-50 text-black cursor-pointer' onClick={closeAccount} src={vector} alt="cancel"></img>
                    </div>
                    <div className='flex flex-col'>
                        <div className="fixed bottom-0  items-center justify-center z-40 w-full h-[60%] pb-[36px] bg-white rounded-lg shadow">
                            <div className='flex flex-row justify-between mt-[24px] ml-[36px]'>
                                <div className="text-black text-2xl font-bold font-['IBM Plex Sans'] mb-[24px]">Create Account</div>

                            </div>
                            <div className='flex flex-row justify-between ml-[36px] w-full'>
                                <div className='w-[84%]'>
                                    <div className="Rectangle2 h-[46px] bg-slate-50 rounded-tl-sm rounded-tr-sm border border-zinc-300 flex flex-row justify-around">
                                        <div className="FirstName text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]  whitespace-nowrap">First Name</div>
                                        <img className="flex flex-row" src={line} art="line"></img>
                                        <div className="LastName text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none py-[15px] whitespace-nowrap">Last Name</div>
                                    </div>
                                    <div className="Rectangle2 h-[46px] bg-slate-50 border border-zinc-300">
                                        <div className="Email text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]">Email</div>
                                    </div>
                                    <div className="Rectangle22  h-[46px] bg-slate-50 border border-zinc-300 flex flex-row justify-between">
                                        <div className="Password text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]">Password</div>
                                        <div className="w-fill h-[18px] relative flex-col justify-start items-start inline-flex py-[14px] pr-[18px]">
                                            <img className="" src={eye} alt="eye" />
                                        </div>
                                    </div>
                                    <div className="Rectangle21  h-[46px] bg-slate-50 rounded-bl-sm rounded-br-sm border border-zinc-300">
                                        <div className="ConfirmPassword text-zinc-500 text-[15px] font-medium font-['IBM Plex Sans'] leading-none pl-[12px] py-[15px]">Confirm Password</div>
                                    </div>
                                    <div className="flex justify-between mt-[20px]">
                                        {/* <div className="Rectangle2  h-10 bg-blue-600 rounded-[15px] mb-[24px]">
                                            <div className="CreateAccount text-center text-white text-sm font-semibold font-['IBM Plex Sans'] leading-none mt-[6px] py-[2px]">Create Account</div>
                                        </div> */}
                                        <div className="Rectangle2 w-[150px] h-9 bg-blue-600 rounded-[20px] mb-[16px]">
                                            <div className="CreateAccount text-center text-white text-[13px] font-semibold font-['IBM Plex Sans'] leading-none py-[12px]">Create Account</div>
                                        </div>
                                        <div className="text-right mt-[7px] mr-[36px]">
                                            <span className="text-blue-600 text-[13px] font-semibold font-['IBM Plex Sans']">Sign In</span>
                                        </div>
                                    </div>

                                    <div className="Rectangle21  h-[38px] bg-white rounded-sm border border-zinc-300 flex flex-row items-center justify-center">
                                        <img className="FLogoRgbBlue1024 w-4 h-4" src={f} alt="facebook" />
                                        <div className="SignUpWithFacebook text-black text-sm font-normal font-['IBM Plex Sans'] leading-none ml-2">Sign up with Facebook</div>
                                    </div>
                                    <div className="Rectangle21  h-[38px] bg-white rounded-sm border border-zinc-300 flex flex-row items-center justify-center mt-[8px]">
                                        <img className="FLogoRgbBlue1024 w-4 h-4" src={search} alt="google" />
                                        <div className="SignUpWithFacebook text-black text-sm font-normal font-['IBM Plex Sans'] leading-none ml-2">Sign up with Google</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignIn