import React, { useContext, Fragment } from 'react';
import { DataContext } from '../Context/DataContext';

export default function List() {
  const { data, setData } = useContext(DataContext);

  // const onRevise = (id) => {
  //   const Revised = prompt('수정하실 사항을 입력하십시오')
  //   setData({
  //     ...data,
  //     worker: data.worker.map(item=> { item.id === id ?
  //     }
  //   })
  // }; 나중에 생각

  const onRemove = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setData({
        ...data,
        worker: data.worker.filter((item) => item.id !== id),
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
