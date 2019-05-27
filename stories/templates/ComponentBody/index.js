import React from 'react';
import PropTypes from 'prop-types';
import Code from '../../utils/Code';
import Props from '../../utils/Props';
// import { parse } from 'react-docgen-typescript';
import './style.css';

export default class ComponentBody extends React.PureComponent {
  get propTypeDatas() {
    const { code } = this.props;
    return '';
    // return code ? parser(code) : '';
  }
  render() {
    const { demoCode, title, code, content } = this.props;
    const Demon = this.props.demo;
    return (
      <div className="ComponentBody">
        {title && <h3>{title}</h3>}
        {content && <div className="ComponentBody__content">{content}</div>}
        {Demon && <Demon />}
        {demoCode && <Code code={demoCode} />}
        {code && false && (
          <React.Fragment>
            <h3>API</h3>
            <Props propList={this.propTypeDatas} />
            <h3>Source Code</h3>
            <Code code={code} />
          </React.Fragment>
        )}
      </div>
    )
  }
}

ComponentBody.propTypes = {
  code: PropTypes.string,
  demoCode: PropTypes.string,
  title: PropTypes.string,
}