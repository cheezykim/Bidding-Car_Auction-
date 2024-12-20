import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Home, Layout } from './routes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>  
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 