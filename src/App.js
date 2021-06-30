import React, {useRef,useEffect, useState} from 'react';
import './App.css';
import { select } from 'd3'; // select will make the svg readable
import FirstSvgD from './components/FirstSvgD';
import CurvedLineChart from './components/CurvedLineChart';


function App() {
  return (
    <div className="App">
     <FirstSvgD></FirstSvgD>
     <CurvedLineChart></CurvedLineChart>
    </div>
  );
}

export default App;
