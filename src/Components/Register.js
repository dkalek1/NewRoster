import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';

export default function Register() {
  const { Data, setData } = useContext(DataContext);
  const [input, setInput] = useState();

  const onChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    console.log(inputValue);
  };

  const onClick = () => {
    setList([...List, input]);
    setData({
      ...Data,
      worker: List,
    });
    console.log(List);
    console.log(Data);
  };

  return (
    <div className="Register">
      <input
        type="text"
        placeholder="관등성명까지 입력해주세요"
        onChange={onChange}
      />
      <button onClick={onClick}>입력</button>
    </div>
  );
}
