import React, { useContext, Fragment, useRef } from 'react';
import { DataContext } from '../Context/DataContext';
import uuid from '../hooks/useUuid';

export default function Register() {
  const { data, setData } = useContext(DataContext);
  const focus = useRef();

  const onChange = (e) => {
    setData({
      ...data,
      input: { ...data.input, name: e.target.value, id: uuid() },
    });
  };

  const onCreate = () => {
    setData({
      ...data,
      worker: data.worker.concat(data.input),
      input: { ...data.input, name: '', id: '' },
    });

    focus.current.value = '';
    focus.current.focus();
  };

  return (
    <Fragment>
      <input
        type="text"
        placeholder="관등성명까지 입력해주세요"
        onChange={onChange}
        ref={focus}
      />
      <button onClick={onCreate}>입력</button>
    </Fragment>
  );
}
