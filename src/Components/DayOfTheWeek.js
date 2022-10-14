import React from 'react';

export default function DayOfTheWeek() {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const result = week.map((day) => <th>{day}</th>);

  return <thead>{result}</thead>;
}
