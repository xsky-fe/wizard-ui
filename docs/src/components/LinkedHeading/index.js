import React from 'react';
import './style.scss';
import headTran from '../../utils/head-tran';

function LinkedHeading({ h, children, ...props }) {
  const key = headTran(children);
  const H = `h${h}`;
  return (
    <H id={key} className="Heading">
      <span>{children}</span>
      <a name={children} href={`#${key}`} className="anchor">
        #
      </a>
    </H>
  );
}

export default LinkedHeading;
