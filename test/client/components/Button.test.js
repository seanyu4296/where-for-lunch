import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../client/components/Button/Button';

describe('With Enzyme, Button component', () => {
  describe('disabled', () => {
    const baseProps = { disabled: true, onClick: () => {} };
    test('should be using disabled styling', () => {
      const wrapper = shallow(<Button {...baseProps} />);
      const p = wrapper.find('.disabled');
      expect(p.length).toBe(1);
    });
    test('should not be able to call onClick', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onClick: spy, theme: 'testing' };
      const wrapper = shallow(<Button {...props} />);
      wrapper.find('.testing').simulate('click');
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
  describe('enabled', () => {
    test('should be able to call onClick', () => {
      const spy = jest.fn();
      const props = { disabled: false, onClick: spy, theme: 'testing' };
      const wrapper = shallow(<Button {...props} />);
      wrapper.find('.testing').simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
