import React from 'react';
import DropdownButton from './index';
import { mount } from 'enzyme';
import { ButtonSizes } from '../../interface';
describe('Dropdown', () => {
  it('should render corrent size', () => {
    const sizes: ButtonSizes[] = ['lg', 'sm', 'xs'];
    const classNames = [
      '.dropdown.btn-group.btn-group-lg',
      '.dropdown.btn-group.btn-group-sm',
      '.dropdown.btn-group.btn-group-xs',
    ];
    sizes.forEach((size, index) => {
      const dropdown = mount(<DropdownButton id="a1" size={size} title="size" />);
      expect(dropdown.find(classNames[index]).length).toBe(1);
    });
  });
  it('should render corrent style', () => {
    const styles = ['default', 'primary', 'success', 'info', 'warning', 'danger'];
    const classNames = [
      '.dropdown.btn-group.btn-group-default',
      '.dropdown.btn-group.btn-group-primary',
      '.dropdown.btn-group.btn-group-success',
      '.dropdown.btn-group.btn-group-info',
      '.dropdown.btn-group.btn-group-warning',
      '.dropdown.btn-group.btn-group-danger',
    ];
    styles.forEach((style, index) => {
      const dropdown = mount(<DropdownButton id="a1" variant={style} title="style" />);
      expect(dropdown.find(classNames[index]).length).toBe(1);
    });
  });
  it('should render corrent modifer', () => {
    const modifer = 'table-toolbar';
    const dropdown = mount(<DropdownButton id="a1" modifer={modifer} title="modifer" />);
    expect(dropdown.find('button.table-toolbar').length).toBe(1);
  });
  it('should render corrent disabled', () => {
    const dropdown = mount(<DropdownButton id="a1" disabled title="disabled" />);
    expect(dropdown.find('.dropdown.disabled.btn-group').length).toBe(1);
  });
  it('should render corrent noCaret', () => {
    const dropdown = mount(<DropdownButton id="a1" noCaret title="noCaret" />);
    expect(dropdown.find('span.caret').length).toBe(0);
  });
  it('should render corrent pullRight', () => {
    const dropdown = mount(<DropdownButton id="a1" align="end" title="pullRight" />);
    expect(dropdown.find('.dropdown-menu.dropdown-menu-right').length).toBe(1);
  });
});
