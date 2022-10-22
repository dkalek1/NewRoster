import React, { useContext, Fragment, useRef, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import useUuid from '../hooks/useUuid';
import calenderData from '../CalenderData';

export default function Register() {
  const { data, setData } = useContext(DataContext);
  const [input, setInput] = useState('');
  const focus = useRef();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onCreate = () => {
    const worker = data.worker.concat({
      name: input,
      id: useUuid(),
      isWork: false,
    });
    setData({
      ...data,
      worker: worker,
      calenderDate: calenderData(worker),
    });
    setInput('');
    focus.current.value = '';
    focus.current.focus();
  };

  return (
    <Fragment>
      <input
        type="text"
        placeholder="관등성명을 입력해주세요"
        onChange={onChange}
        ref={focus}
        onKeyPress={(e) => {
          if (e.Key === 'Enter') {
            console.log('앤터눌림');
          }
        }}
      />
      <input type="button" onClick={onCreate} value="입력" id="submit" />
    </Fragment>
  );
}
