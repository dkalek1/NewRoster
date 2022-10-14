import React from 'react';
import List from './List';
import Register from './Register';

export default function LeftPart() {
  return (
    <div className="LeftPart">
      <Register />
      <List />
    </div>
  );
}
