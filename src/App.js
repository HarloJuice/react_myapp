import './App.css';
import React from'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HelloWorld from './components/helloworld';
import AllSuper from './components/testcomponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/test" element={<AllSuper />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
    
}

export default App;
