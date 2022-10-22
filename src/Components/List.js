import React, { useContext, Fragment } from 'react';
import { DataContext } from '../Context/DataContext';
import calenderData from '../CalenderData';

export default function List() {
  const { data, setData } = useContext(DataContext);
  const { worker } = data;

  const onRevise = (id) => {
    const selectedWorker = worker.filter((man) => man.id === id);
    const Revised = prompt('수정하실 사항을 입력하십시오');
    const RevisecWorker = {
      id: selectedWorker[0].id,
      name: Revised,
      isWork: selectedWorker[0].isWork,
    };
    const copiedWorkerList = worker
      .filter((man) => man.id !== id)
      .concat(RevisecWorker);
    setData({
      ...data,
      worker: copiedWorkerList,
      calenderDate: calenderData(copiedWorkerList),
    });
  };

  const onRemove = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const removedData = data.worker.filter((item) => item.id !== id);
      setData({
        ...data,
        worker: removedData,
        calenderDate: calenderData(removedData),
      });
      alert('삭제되었습니다!');
    }
  };

  const result = data.worker.map((worker) => (
    <p key={worker.id}>
      {worker.name}
      <button onClick={() => onRevise(worker.id)}>수정</button>
      <button onClick={() => onRemove(worker.id)}>삭제</button>
    </p>
  ));

  return <Fragment>{result}</Fragment>;
}
