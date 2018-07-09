import React from 'react';
import { shallow } from 'enzyme';
import PricePicker from '../../../client/components/PricePicker/PricePicker';

describe('With Enzyme, Price Selector component', () => {
  const requiredProps = { value: {}, onChange: () => {} };
  test('renders successfully', () => {
    const component = shallow(<PricePicker {...requiredProps} />);
    expect(component.exists()).toEqual(true);
  });
  describe('static choices', () => {
    test('returns an array with length of 4 and ascending id', () => {
      expect(PricePicker.choices.length).toEqual(4);
      PricePicker.choices.forEach((v, i) => {
        expect(v.id).toEqual(i + 1);
      });
    });
  });
  test('has the same number of checkboxes with choices', () => {
    const wrapper = shallow(<PricePicker {...requiredProps} />);
    expect(wrapper.find('input').length).toBe(PricePicker.choices.length);
  });
  test('calls onChange func props once when a checkbox is selected', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(
      <PricePicker {...requiredProps} onChange={clickSpy} />,
    );
    wrapper
      .find('input')
      .first()
      .simulate('change', { target: { checked: true } });
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
