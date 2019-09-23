import React from 'react';
import { VirtualSelectBoxProps, VirtualSelectBoxState } from '../../interface';

declare class VirtualSelectBox<T> extends React.Component<VirtualSelectBoxProps<T>, VirtualSelectBoxState<T>>{ }

export default VirtualSelectBox;