import React from 'react'
import LeftPage from './LeftPage.jsx'
import RightPage from './RightPage.jsx'

const Body = () => {
    return (
        <div className='flex flex-row w-full'>
            <LeftPage />
            <RightPage />
        </div>
    )
}

export default Body