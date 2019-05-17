import React from 'react';
import lodash from 'lodash';
import propTypeParse from '../prop-type-parse';
import './style.scss';

export default function Props(props) {
  // props.propList 数据格式
  // https://github.com/reactjs/react-docgen#result-data-structure
  const { props: propValues } = props.propList || {};
  if (!propValues) return <div className="panel-empty">NO PROPS</div>;
  return (
    <section className="story-props">
      <table className="story-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>类型</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          {lodash.keys(propValues).map(key => {
            const { description, required, type, defaultValue } = propValues[key];
            const propType = propTypeParse(type);
            return (
              <tr key={key}>
                <td>{key}{required && <span className="required">Required</span>}</td>
                <td>{propType}</td>
                <td>{defaultValue ?
                  typeof defaultValue.value === 'object' ?
                    JSON.stringify(defaultValue.value, null, 2) : defaultValue.value
                  : ''}
                </td>
                <td>{description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}