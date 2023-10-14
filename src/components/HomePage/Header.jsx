import React from 'react'
import Logo from "../../assets/logo.svg"
import dropArrow from "../../assets/dropArrow.svg"
import searchtool from "../../assets/searchtool.svg"

import "../../assets/fonts/fonts.css"
const Header = () => {
    return (
        <>
            <div className="hidden sm:block w-full h-[72px] bg-white shadow" >
                <div className='flex flex-row justify-between'>
                    <div className="flex-1 w-[162.57px] h-6 relative">
                        <img className="ml-[72px] max-w-[162px] h-6 mt-6" src={Logo} alt="Logo" />
                    </div>

                    <div className="absolute mt-[16px] mb-[14px] left-[36.1%] right-[37.2%] max-w-[20%] h-[42px]s">
                        <img className="absolute left-[14px] top-[10px] w-[22px] h-[22px]" src={searchtool} alt="SearchTool" />
                        <input type="text" placeholder="Search for your favorite groups" className="md:min-w-[10px] w-full min-w-[320px] h-[42px] px-[50px] py-2 rounded-[21px] border-none focus:outline-none  bg-zinc-100" />
                    </div>

                    <div className="flex-1 text-right mr-[96px] min-w-[183px] h-[21px] flex flex-row mt-[27px] mb-[24px] fixed top-0 right-0">
                        <span className="text-zinc-800 min-w-fill text-base font-medium font-['IBM Plex Sans'] whitespace-nowrap">Create account. </span>
                        <span className="text-blue-600 text-base font-bold font-['IBM Plex Sans'] flex flex-row whitespace-nowrap">
                            <p> It's free!</p>
                        </span>
                        <div className="w-6 h-6 relative" >
                            <img src={dropArrow} alt="dropdownarrow" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header