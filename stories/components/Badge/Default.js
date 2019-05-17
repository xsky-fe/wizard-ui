import React from 'react';
import { Badge } from '../../../src/lib';
import BadgeCode from '!!raw-loader!../../../src/lib/Badge';
import ComponentBody from '../../templates/ComponentBody/index';

const SIZES = ['small', 'middle', 'large'];
const STATUS = ['default', 'success', 'info', 'critical', 'warning', 'danger'];
const DOT_SIZE_DEMO = `// size in ['small', 'middle', 'large']
<Badge dot size={size} />
`;
const DOT_STATUS_DEMO = `// status in ['default', 'success', 'info', 'critical', 'warning', 'danger'];
<Badge dot status={status} text={status} />
`
const DOT_COUNT_DEMO = `// status in ['default', 'success', 'info', 'critical', 'warning', 'danger'];
<Badge count={20} status={status} />
`
const ZERO = `// show
<Badge count={0} showZero />
// hide
<Badge count={0} />
`
const NUMBER = `// show default overflowCount 99
<Badge count={2000}>
  <span className="icon icon-alert" />
</Badge>;
// dot prompt
<Badge dot>
  <span className="icon icon-alert" />
</Badge>;
`


export default function() {
  return (
    <div>
      <ComponentBody
        title="点尺寸"
        content={SIZES.map(size => (
          <div key={size}>
            <span>{size}:&nbsp;</span>
            <Badge dot size={size}/>
          </div>
        ))}
        demoCode={DOT_SIZE_DEMO}
      />
      <ComponentBody
        title="点状态"
        content={STATUS.map(status => (
          <div key={status}>
            <Badge dot status={status} text={status}/>
          </div>
        ))}
        demoCode={DOT_STATUS_DEMO}
      />
      <ComponentBody
        title="数字状态"
        content={STATUS.map(status => (
          <div key={status}>
            <span>{status}:&nbsp;</span>
            <Badge count={20} status={status}/>
          </div>
        ))}
        demoCode={DOT_COUNT_DEMO}
      />
      <ComponentBody
        title="数字为0时处理"
        content={
          <React.Fragment>
            <div>
              <span>showZero 为 true:&nbsp;</span>
              <Badge count={0} showZero />
            </div>
            <div>
              <span>showZero 为 false:&nbsp;</span>
              <Badge count={0} />
            </div>
          </React.Fragment>
        }
        demoCode={ZERO}
      />
      <ComponentBody
        title="限定数字"
        content={
          <Badge count={2000} overflowCount={999} />
        }
        demoCode={`Badge count={2000} overflowCount={999}/>`}
      />
      <ComponentBody
        title="限定数字"
        content={
          <React.Fragment>
            <span style={{ marginRight: '30px' }}>
              <Badge count={2000}>
                <span className="icon icon-alert" />
              </Badge>
            </span>
            <Badge dot>
              <span className="icon icon-alert" />
            </Badge>
          </React.Fragment>
        }
        demoCode={NUMBER}
      />
      <ComponentBody code={BadgeCode}/>
    </div>
  )
}