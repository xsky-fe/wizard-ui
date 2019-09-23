import React from 'react';
import { VirtualListProps, VirtualListState } from '../../interface';

declare class VirtualList<T> extends React.Component<VirtualListProps<T>, VirtualListState>{ }

export default VirtualList;