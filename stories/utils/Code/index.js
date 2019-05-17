import React from 'react';
import Hightlight from '../Hightlight';
import { Button } from 'react-bootstrap';
import './style.css';

export default class Code extends React.Component {
  state = {
    show: false,
  };
  toggle = () => {
    this.setState ({
      show: !this.state.show,
    });
  };
  render () {
    const { code } = this.props;
    return (
      <div>
        <Button bsStyle="link" onClick={this.toggle}>
          {this.state.show ? '收起' : '展开'}
        </Button>
        {this.state.show && <div className="story-code"><Hightlight code={code} /></div>}
      </div>
    );
  }
}
