/**
 * this.intervals管理定时器maps，在hoc内部操作，不对外暴露
 */
import React, { Component } from 'react';
import { has, omit, values } from 'lodash';

export default () => (ComposedComponent: any) => {
  return class Interval extends Component {
    intervals: object;
    constructor(props: object) {
      super(props);
      this.intervals = {};
      this.set = this.set.bind(this);
      this.clear = this.clear.bind(this);
      this.has = this.has.bind(this);
    }
    set(key: string | number, func: () => void, time: number) {
      //设置之前，判断定时器maps中是否存在相同key值
      if (has(this.intervals, key)) {
        throw new Error(`the interval ${key} has been set repeatedly.`);
      }
      this.intervals = {
        ...this.intervals,
        [key]: setInterval(func, time),
      };
    }
    clear(key: string | number) {
      if (has(this.intervals, key)) {
        clearInterval(this.intervals[key]);
        this.intervals = omit(this.intervals, key);
      }
    }
    has(key: string | number) {
      return has(this.intervals, key);
    }
    componentWillUnmount() {
      values(this.intervals).map(interval => clearInterval(interval));
    }
    render() {
      return (
        <ComposedComponent
          {...this.props}
          intervalMap={{
            set: this.set,
            clear: this.clear,
            has: this.has,
          }}
        />
      );
    }
  };
};
