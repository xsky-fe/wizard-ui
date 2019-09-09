import React from 'react';
import intervalHoc from '../../hocs/intervalHoc';
import Notification from './Notification';

// HOC 形式提供 intervalMap 方法，统一管理定时器
const connector = intervalHoc();

const IntervalNotification: React.FC<any> = props => <Notification {...props} />

export default connector(IntervalNotification);
