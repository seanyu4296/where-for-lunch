import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Place from 'client/components/Place/Place';
import renderer from 'react-test-renderer';

test('With Enzyme, Place component not render rating section when no rating passed over', () => {
  const place = { hehe: 'haha' };
  const wrapper = shallow(
    <MemoryRouter keyLength={0}>
      <Place place={place} />
    </MemoryRouter>,
  );
  const p = wrapper.find('.rating');
  expect(p.length).toBe(0);
});

test('With Jest snapshot, Place component renders rating section when present', () => {
  const place = { data: { rating: 3.5, id: 'test' } };
  const placeComponent = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <Place place={place} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(placeComponent).toMatchSnapshot();
});
