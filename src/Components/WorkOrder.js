import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';


export default function WorkOrder() {
  const { data } = useContext(DataContext);
  const { worker } = data;

  const result = worker.map((man) => `${man.name}->`);
  return (
    <p>
      근무순서 : {result}
      {worker[0]?.name}
    </p>
  );
}
