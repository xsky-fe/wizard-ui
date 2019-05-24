import React from 'react';
import './style.scss';

function Toc({ headings, location }) {
  return (
    <div className="Main__Toc">
      {headings.map(({ depth, value }, idx) => {
        const isCurrent = location.hash && decodeURIComponent(location.hash).includes(value);
        return (
          <div key={idx} className={`Main__Toc--li${depth}`}>
            <a href={`#${value}`} className={`${isCurrent ? 'current' : ''}`}>
              {value}
            </a>
          </div>
        )
      })}
    </div>
  );
}

export default Toc;