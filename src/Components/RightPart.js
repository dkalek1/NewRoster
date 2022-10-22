import React from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import MonthDate from './MonthDate';
import Header from './Header';
import WorkOrder from './WorkOrder';

export default function RightPart() {
  return (
    <div className="RightPart">
      <Header />
      <table>
        <DayOfTheWeek />
        <MonthDate />
      </table>
      <WorkOrder />
    </div>
  );
}
