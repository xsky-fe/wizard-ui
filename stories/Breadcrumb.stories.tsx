import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from '../src';

const meta: Meta<typeof Breadcrumb> = {
  title: 'COMPONENTS/Breadcrumb',
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  render: props => (
    <Breadcrumb>
      <BreadcrumbItem href="#">资源列表1</BreadcrumbItem>
      <BreadcrumbItem href="#">资源列表2</BreadcrumbItem>
      <BreadcrumbItem href="#" active>资源列表3</BreadcrumbItem>
    </Breadcrumb>
  ),
};
