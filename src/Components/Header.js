import React from 'react';

export default function Header() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;

  return <header className="header">{month}월 당직근무표</header>;
}
