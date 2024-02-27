import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-phone-number-input/style.css';
import Home from "./components/Home";
import Thankyou from "./components/Thankyou";
import "animate.css/animate.min.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
