import React from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import MonthDate from './MonthDate';

export default function RightPart() {
  return (
    <table className="RightPart">
      <DayOfTheWeek />
      <MonthDate />
    </table>
  );
}
