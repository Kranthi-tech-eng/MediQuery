import React from 'react'

const Main = () => {
  return (
    <div className="search bg-[url(https://i.pinimg.com/736x/53/9c/3c/539c3c25f93825de8c1a633775123c1d.jpg)] bg-no-repeat bg-cover bg-content">
      <h1 className='text-center font-extrabold text-3xl text-shadow-emerald-800'>Medicine info at Your Fingertips</h1>
      <div className='flex justify-end'>
        <div className='flex border rounded-2xl w-40 cursor-pointer bg-red-200 mt-3 mr-8'>
        <button className='h-10 w-25 bg-transparent font-extrabold text-black-700 hover:text-orange-400 hover:cursor-pointer ml-1.5'>Remainder</button>
        <img src="public/remainder.png" alt="" className='w-10 h-10' />
      </div>
      </div>
      
        
      <div className="flex justify-center">
        <div className="flex items-center bg-cyan-100 rounded-full px-4 py-2 w-150 h-15 border mt-25">
          
          <input
            type="text"
            placeholder="Enter your medicine name..."
            className="bg-transparent outline-none w-full"
          />
          <button><img src="public/search.png" alt="search" className="w-5 h-5 mr-3 hover:invert hover:cursor-pointer" /></button>
        </div>
      </div>



    </div>
    

  )
}

export default Main
