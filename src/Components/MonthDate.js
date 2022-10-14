import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import WeekMaker from './WeekMaker';

export default function MonthDate() {
  const { data, setData } = useContext(DataContext);
  const weekData = data.calenderDate;
  const result = weekData.filter((week, index) => week.weekCount == index);
  debugger;
  return <tbody>{result}</tbody>;
}

//날짜 출력하는 알고리즘 생각