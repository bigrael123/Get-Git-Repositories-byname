import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repositories from './repositories';
import Home from './home'

export default function Routed(){
    console.log("came");
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </BrowserRouter>
    );
}