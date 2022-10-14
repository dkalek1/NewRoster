import React, { useState } from 'react';
import './style.css';
import LeftPart from './Components/LeftPart';
import RightPart from './Components/RightPart';
import { DataContext } from './Context/DataContext';
import week from '../CalenderData';

export default function App() {
  const [data, setData] = useState({
    input: { name: '', id: '' },
    worker: [],
    calenderDate: [week],
  });

  console.log(week)

  return (
    <div className="Container">
      <DataContext.Provider value={{ data, setData }}>
        <LeftPart />
        <RightPart />
      </DataContext.Provider>
    </div>
  );
}
// new Date(date.getFullYear(), date.getMonth(), calenderDay).getDay() == 0||6 ? true : false