import React, { useState } from 'react';
import './style.css';
import LeftPart from './Components/LeftPart';
import RightPart from './Components/RightPart';
import { DataContext } from './Context/DataContext';
import calenderData from './CalenderData';

function App() {
  const [data, setData] = useState({
    worker: [],
    calenderDate: calenderData(),
  });

  return (
    <div className="Container">
      <DataContext.Provider value={{ data, setData }}>
        <LeftPart />
        <RightPart />
      </DataContext.Provider>
    </div>
  );
}

export default App;
