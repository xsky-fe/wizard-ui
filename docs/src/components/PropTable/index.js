import React from 'react';
import propTypeParse from '../../utils/prop-type-parse';
import lodash from 'lodash';
import './style.scss';

const PropTable = props => {
  const { propDatas } = props;
  const currentProps = lodash.get(propDatas, 'node.props', []);
  if (lodash.isEmpty(currentProps)) {
    return null;
  }
  return (
    <div className="PropTable">
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>类型</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          {currentProps.map((curr, key) => {
            const { name, type, defaultValue, required, description } = curr;
            const propType = propTypeParse(type);
            return (
              <tr key={key}>
                <td>{name}{required && <span className="required">Required</span>}</td>
                <td>{propType}</td>
                <td>{defaultValue ?
                  typeof defaultValue.value === 'object' ?
                    JSON.stringify(defaultValue.value, null, 2) : defaultValue.value
                  : '-'}
                </td>
                <td>{description ? description.text : '-'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PropTable;


