import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../Context/DataContext';
import WeekMaker from './WeekMaker';
import useUuid from '../hooks/useUuid';

export default function MonthDate() {
  const { data, setData } = useContext(DataContext);
  const { calenderDate } = data;
  const { worker } = data;

  const result = calenderDate.map((week) => (
    <tr key={useUuid()}>
      <WeekMaker week={week} />
    </tr>
  ));

  return <tbody>{result}</tbody>;
}

//날짜와 사람을 동시에 출력하는 알고리즘 생각
