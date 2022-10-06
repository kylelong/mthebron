import React from 'react';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import PastorsDesk from './PastorsDesk';
import Ministires from './Ministries';
import './App.css'
const App = () => {


  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pastorsdesk" element={<PastorsDesk />}/>
          <Route path="ministries" element={<Ministires />}/>
        </Routes>

    
    </>
  )
}

export default App;