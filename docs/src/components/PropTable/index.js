import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import propTypeParse from '../../utils/prop-type-parse';
import lodash from 'lodash';

const PropTable = props => {
  const { pathname } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          allComponentMetadata {
            edges {
              node {
                displayName
                props {
                  name
                  type {
                    name
                    value
                  }
                  defaultValue {
                    value
                  }
                  required
                  description {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const edges = lodash.get(data, 'allComponentMetadata.edges', []);
        const current = lodash.find(edges, edge => {
          const displayName = lodash.lowerFirst((lodash.get(edge, 'node.displayName')));
          return pathname.includes(displayName) && !displayName.includes('components')
        }) || {};
        const currentProps = lodash.get(current, 'node.props', []);
        if (lodash.isEmpty(currentProps)) {
          return (
            <div>
              暂无
            </div>
          )
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
      }}
    />
  )
}

export default PropTable;

