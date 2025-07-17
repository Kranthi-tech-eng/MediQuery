import React from 'react'

const Footer = () => {
    return (
        <div className='flex mt-6 h-15 bg-orange-500'>
            <img src="public/information.png" alt="" className=' h-7 mt-3 rounded-full ml-5'/>
            <h2 className='font-bold text-center mt-4 ml-0.5'>MediQuery helps you check medicine uses and timings. It’s just for info — not medical advice. Always ask your doctor if needed.</h2>
        </div>
    )
}

export default Footer
