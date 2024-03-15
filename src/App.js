import './App.css';
import React from'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HelloWorld from './components/helloworld';
import AllSuper from './components/testcomponent';
import ImageGallery from './pages/images';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/test" element={<AllSuper />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
  
}

export default App;
