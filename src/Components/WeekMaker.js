import React, { Fragment, useContext } from 'react';
import useUuid from '../hooks/useUuid';
import { DataContext } from '../Context/DataContext';

export default function WeekMaker({ week }) {
  const { data, setData } = useContext(DataContext);
  //   const Clicked = (id) => {
  //     setData({
  //       ...data,
  //     });
  //   };

  const result = week.map((day) => (
    <td key={useUuid()}>
      <button
        className={day.date ? 'dateButton' : 'none'}
        style={{
          color: day.day === 0 ? 'red' : day.day === 6 ? 'blue' : 'black',
        }}
        onClick={() => {
          console.log(`${day.date} 요소 클릭됨`);
        }}
      >
        {day.date ?? ' '}
        <p className="workerName">
          {day.worker ? `근무자 : ${day.worker}` : ' '}
        </p>
      </button>
    </td>
  ));

  return <Fragment>{result}</Fragment>;
}

//    color: day.day===0 ? "red" : day.day===6 ? "blue" : "black" -> 요일값이 0 이면 빨간색, 6이면 파란색
