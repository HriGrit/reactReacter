import React from 'react'
import posterbg from "../../assets/posterbg.svg"
import "../../assets/fonts/fonts.css"

const Poster = () => {
    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${posterbg})`,
                // how do i fit this image to the screen?
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }} className="w-full h-[440px] sm:w-fill">
                <div className="pl-[13.8%] pt-[286px] text-white text-4xl font-bold font-['IBM Plex Sans']">Computer Engineering</div>
                <div className="pl-[13.8%] text-white text-lg font-normal font-['IBM Plex Sans']">142,765 Computer Engineers follow this</div>
            </div>
        </>
    )
}

export default Poster