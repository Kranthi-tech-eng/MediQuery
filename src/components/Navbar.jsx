import React from 'react'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
     const navigate = useNavigate();
    return (

        <nav className='h-30 w-full justify-center sm:flex sm:justify-between bg-blue-200'>
            <div className="upside">
                <img src="/logo1.png" alt="" className='w-60 h-15 mx-auto rounded-full sm:h-auto sm:w-60 sm:bg-auto sm:rounded-full sm:mt-5 sm:ml-5' />
            </div>
            <div className="loginbtns gap-2 sm:gap-5 justify-end flex mt-2 sm:mt-6 sm:mr-8 mr-4">

                <button onClick={() => navigate('/login')} className="bg-blue-500 text-white hover:font-extrabold cursor-pointer sm:text-xl rounded-full sm:w-30 sm:h-15 w-15 h-10 ">
                    Login

                </button>                    <button onClick={() => navigate('/signup')} className='bg-blue-500 text-white hover:font-extrabold cursor-pointer sm:w-30  sm:h-15 rounded-full w-15 h-10'>SignUp</button>
            </div>

        </nav>

    )
}

export default Navbar
