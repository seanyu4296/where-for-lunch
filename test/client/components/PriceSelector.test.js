import React from 'react';
import { shallow } from 'enzyme';
import PriceSelector from '../../../client/components/PriceSelector/PriceSelector';

describe('With Enzyme, Price Selector component', () => {
  const requiredProps = { value: {}, onChange: () => {} };
  test('renders successfully', () => {
    const component = shallow(<PriceSelector {...requiredProps} />);
    expect(component.exists()).toEqual(true);
  });
  test('has the same number of checkboxes with choices', () => {
    const wrapper = shallow(<PriceSelector {...requiredProps} />);
    expect(wrapper.find('input').length).toBe(PriceSelector.choices.length);
  });
  test('calls onChange func props once when a checkbox is selected', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(
      <PriceSelector {...requiredProps} onChange={clickSpy} />,
    );
    wrapper
      .find('input')
      .first()
      .simulate('change', { target: { checked: true } });
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
