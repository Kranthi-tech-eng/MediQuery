import React, { useState } from 'react';

const Main = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { name: 'Paracetamol', uses: 'Fever, Pain Relief', time: 'Every 6 hours' },
    { name: 'Ibuprofen', uses: 'Inflammation, Pain Relief', time: 'Every 8 hours' },
    { name: 'Amoxicillin', uses: 'Bacterial Infections', time: 'Every 12 hours' },
    { name: 'Cetirizine', uses: 'Allergy Relief', time: 'Once daily' },
    { name: 'Ranitidine', uses: 'Acidity, Ulcers', time: 'Twice daily before meals' },
    { name: 'Azithromycin', uses: 'Bacterial Infections', time: 'Once daily for 3 days' },
    { name: 'Metformin', uses: 'Diabetes Control', time: 'Twice daily after meals' },
    { name: 'Loperamide', uses: 'Diarrhea Control', time: 'After each loose motion' },
  ];


  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const handleSetReminder = () => {
    const message = prompt("Enter a medicine name to remind:");
    if (!message) return;

    const time = prompt("Set time in seconds:");
    if (!time || isNaN(time)) {
      alert("Please enter a valid time in seconds.");
      return;
    }

    alert(`Reminder set! You will be reminded in ${time} seconds.`);

    setTimeout(() => {
      alert(`Reminder: ${message}`);
    }, time * 1000);
  };


  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const handleSearchhh = async () => {
    try {
      const res = await fetch(`https://mediquerybackend-1.onrender.com/api/search?name=${search}`);
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        setResult(null);
        alert('Medicine not found');
      }
    } catch (err) {
      console.error(err);
    }
  }




  return (
    <div className="search bg-[url(https://i.pinimg.com/736x/53/9c/3c/539c3c25f93825de8c1a633775123c1d.jpg)] bg-no-repeat bg-cover bg-content">
      <h1 className='text-center font-extrabold text-3xl text-shadow-emerald-800'>
        Medicine info at Your Fingertips
      </h1>

      <div className='flex justify-end'>
        <div className='flex border rounded-2xl w-40 cursor-pointer bg-red-200 mt-3 mr-8'>
          <button onClick={handleSetReminder} className='h-10 w-25 bg-transparent font-extrabold text-black-700 hover:text-orange-400 hover:cursor-pointer ml-1.5'>
            Remainder
          </button>
          <img src="/remainder.png" alt="" className='w-10 h-10' />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center bg-cyan-100 rounded-full sm:px-4 sm:py-2 sm:w-150 sm:h-15 border sm:mt-25 mt-15 w-100 h-13">
          <input
            type="text"
            placeholder="Enter a medicine name or symptom..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full"
          />
          <button onClick={handleSearchhh}>
            <img
              src="/search.png"
              alt="search"
              className="w-5 h-5 mr-3 hover:invert hover:cursor-pointer"
            />
          </button>
        </div>
      </div>
      {result?.type === "medicine" && (
  <div className="flex justify-center">
    <div className="mt-4 p-4 w-100 h-40 bg-amber-50 border rounded">
      <h3 className="font-extrabold mt-2 text-center text-2xl">{result.name}</h3>
      <p className="text-center mt-3"><strong>Uses:</strong> {result.uses}</p>
      <p className="text-center"><strong>Time:</strong> {result.time}</p>
    </div>
  </div>
)}

{result?.type === "symptom" && (
  <div className="mt-6">
    <h3 className="text-center font-bold text-xl mb-4">Top used Medicines for "{result.symptom}."</h3>
    {result.medicines.length === 0 ? (
      <p className="text-center text-red-500">No medicines found for this symptom.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {result.medicines.map((med, idx) => (
          <div key={idx} className="p-4 bg-green-50 border rounded shadow">
            <h4 className="font-bold text-lg text-center">{med.name}</h4>
            <p className="mt-2 text-center"><strong>Uses:</strong> {med.uses}</p>
            <p className="text-center"><strong>Time:</strong> {med.time}</p>
          </div>
        ))}
      </div>
    )}
  </div>
)}


      <h2 className='font-bold underline text-center text-2xl ml-2 mt-8 px-2 mb-2 text-gray-600'>
        Most searched Medicines
      </h2>

      <div className="relative group">
        <button className="chatbot cursor-pointer fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
          <img src="/chat-bot.png" alt="Chatbot" className="w-10" />
        </button>
        <div className="fixed bottom-20 right-4 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
          Chat with us!
        </div>
      </div>

      {/* Replaced Cards Section */}
      <div className="cards  grid sm:flex justify-center sm:flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`bg-white w-80 h-40 sm:h-60 ml-3 mt-3 p-4 cursor-pointer transition-all duration-300  ease-in-out mb-4
              ${activeCard === index ? 'sm:scale-110 h-60 w-100 sm:shadow-2xl sm:w-100 sm:h-80 sm:z-10' : ''}
            `}
          >
            <h3 className="font-bold mt-4 text-center text-lg mb-2">{card.name}</h3>
            <p className='mt-6 ml-3'>Uses: {card.uses}</p>
            <p className='mt-3 ml-3'>Time: {card.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
