import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Home } from './routes';

function App() {
  const [count, setCount] = useState(0)  

  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path ="/" element={<Home/>} />   

      </Routes>
      </BrowserRouter>
      
      <h1> hello </h1> 

    </>
  );
}

export default App
