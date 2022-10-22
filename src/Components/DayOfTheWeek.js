import React from 'react';
import useUuid from '../hooks/useUuid';

export default function DayOfTheWeek() {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const result = week.map((day) => (
    <th
      key={useUuid()}
      style={{
        color: day === '일' ? 'red' : day === '토' ? 'blue' : 'black',
      }}
    >
      {day}
    </th>
  ));

  return (
    <thead>
      <tr className="days">{result}</tr>
    </thead>
  );
}
