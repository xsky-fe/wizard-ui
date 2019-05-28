import lodash from 'lodash';
import React from 'react'

export default function(type) {
  if (!type) return ;
  let propType = type.name;
  // 需要完善 type.value 的判断

  // proptype oneOfType
  let oneOfType = [];
  if (propType === 'union' && lodash.isArray(type.value)) {
    type.value.forEach(val => {
      oneOfType.push(val.name);
    });
  }

  // proptype oneOf
  let oneOf = [];
  if (propType === 'enum' && lodash.isArray(type.value)) {
    type.value.forEach(val => {
      oneOf.push(val.value);
    });
  }

  // proptype instanceOf
  let instanceOf;
  if (propType === 'instanceOf') {
    instanceOf = type.value;
  }

  // proptype shape
  let shape;
  if (propType === 'shape') {
    shape = (
      <table>
        <tbody>
          {lodash.keys(type.value).map(key => {
              const { name, description, required } = type.value[key];
              return (
                <tr key={key}>
                  <td>{key}{required && <span className="required">Required</span>}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }


  if (oneOfType.length > 0) {
    propType += `(${oneOfType.join(', ')})`;
  }
  if (oneOf.length > 0) {
    propType += `(${oneOf.join(', ')})`;
  }
  if (instanceOf) {
    propType += `(${instanceOf})`;
  }
  if (shape) {
    propType = (
      <div>
        <div>{propType}</div>
        {shape}
      </div>
    )
  }


  return propType;
}