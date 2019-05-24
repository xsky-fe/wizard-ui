import React from 'react';
import './style.scss';

function LinkedHeading({ h, children }) {
  const H = `h${h}`;
  return (
    <H id={children} className="Heading">
      <span>{children}</span>
      <a name={children} href={`#${children}`} className="anchor">
        #
      </a>
    </H>
  );
}

export default LinkedHeading;
