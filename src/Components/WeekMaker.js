import React from 'react';

export default function WeekMaker({ data }) {
  const result = data.map(item=><tb key={item.id}>{item.day}</tb>);
  return { result };
}
