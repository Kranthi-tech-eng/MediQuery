import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Faqs from './components/Faqs'
// import Chatbot from './components/Chatbot'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
  
     <Navbar/>
     <Main/>
    {/* <Chatbot/> */}
     <Faqs/>
     <Footer/>
    </>
  )
}

export default App
