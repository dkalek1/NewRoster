import React, { useState } from 'react';
import './style.css';
import LeftPart from './Components/LeftPart';
import RightPart from './Components/RightPart';
import { DataContext } from './Context/DataContext';

export default function App() {
  const [Data, setData] = useState({
    worker: [],
    date: [],
  });

  return (
    <div className="Container">
      <DataContext.Provider value={{ Data, setData }}>
        <LeftPart />
        <RightPart />
      </DataContext.Provider>
    </div>
  );
}

// {
//   "worker" : [],
//   "date" : []
// }
