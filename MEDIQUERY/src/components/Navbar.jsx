import React from 'react'



const Navbar = () => {
    return (

        <nav className='h-30 w-full flex justify-between bg-blue-200'>
            <div className="upside ">
                <img src="public/logo1.png" alt="" className='h-auto w-60 bg-auto rounded-full mt-5 ml-5' />
            </div>
            <div className="loginbtns gap-5 flex mt-6 mr-8 ">

                <button className="bg-blue-500 text-white hover:font-extrabold cursor-pointer text-xl rounded-full w-30 h-15">
                    Login

                </button>                    <button className='bg-blue-500 text-white hover:font-extrabold cursor-pointer w-30  h-15 rounded-full'>SignUp</button>
            </div>

        </nav>

    )
}

export default Navbar
