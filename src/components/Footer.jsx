import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='flex justify-center mt-6  sm:h-15 bg-orange-500'>
        <img src="/information.png" alt="" className='h-7 mt-3.5 rounded-full ml-5' />
        <h2 className='font-bold text-center sm:mt-4 sm:ml-0.5'>
          MediQuery helps you check medicine uses and timings. It’s just for info — not medical advice. Always ask your doctor if needed.
        </h2>
      </div>

      {/* <div className="flex justify-center mt-4">
        <h2
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer text-center font-bold transition-all duration-300 ease-in-out 
            ${isOpen ? 'w-80 p-4 text-xl bg-gray-200 rounded-xl shadow-lg' : 'w-fit'}
          `}
        >
          Click Me!
        </h2>
      </div> */}
    </>
  );
};

export default Footer;
