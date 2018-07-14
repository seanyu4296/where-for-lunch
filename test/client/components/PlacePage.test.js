import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Carousel from 'nuka-carousel';
import { mount } from 'enzyme';
import { PlacePage } from '../../../client/containers/PlacePage/PlacePage';
import Spinner from '../../../client/components/Spinner/Spinner';
import GMaps from '../../../client/components/GMaps';

describe('With Enzyme, PlacePage Component', () => {
  const baseProps = {
    actions: { fetchPlaceDetailsRequest: () => {} },
    match: { params: { id: 'test' } },
  };
  test('should have one Spinner when place fetching is true', () => {
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <PlacePage {...baseProps} place={{ fetching: true, data: {} }} />
      </MemoryRouter>,
    );
    expect(wrapper.find(Spinner).length).toBe(1);
  });
  test('should have image Carousel present when there are multiple photos', () => {
    const wrapper = mount(
      <PlacePage
        {...baseProps}
        place={{ fetching: false, data: { photos: ['p', 'h'] } }}
      />,
    );
    expect(wrapper.find(Carousel).exists()).toEqual(true);
  });
  test('should have GMaps present when lat lng is present', () => {
    const wrapper = mount(
      <PlacePage
        {...baseProps}
        place={{
          fetching: false,
          data: { coordinates: { latitude: 1, longitude: 2 } },
        }}
      />,
    );
    expect(wrapper.find(GMaps).exists()).toEqual(true);
  });
  test('should not have GMaps when missing lat lng data', () => {
    const wrapper = mount(
      <PlacePage
        {...baseProps}
        place={{
          fetching: false,
          data: {},
        }}
      />,
    );
    expect(wrapper.find(GMaps).exists()).toEqual(false);
    expect(wrapper.contains(<span>No Location Available</span>)).toEqual(true);
  });
});

test('With Jest Snapshot, Place Page renders content when place data is present', () => {
  const place = {
    data: {
      id: 'TEST',
      name: 'TEST',
      is_closed: false,
      url: 'https://www.test.com/test',
      phone: '+6300000',
      display_phone: '+63 0000000',
      review_count: 2,
      categories: [
        {
          alias: 'TEST',
          title: 'TEST',
        },
      ],
      rating: 4.5,
      location: {
        address1: '',
        address2: '',
        address3: '',
        city: '',
        zip_code: '',
        country: '',
        state: '',
        display_address: [''],
        cross_streets: '',
      },
      coordinates: {
        latitude: 1,
        longitude: 1,
      },
      photos: [],
      hours: [
        {
          open: [
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 0,
            },
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 1,
            },
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 2,
            },
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 3,
            },
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 4,
            },
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 5,
            },
            {
              is_overnight: true,
              start: '1100',
              end: '0200',
              day: 6,
            },
          ],
          hours_type: 'REGULAR',
          is_open_now: true,
        },
      ],
      transactions: [],
    },
  };
  const props = {
    place,
    actions: { fetchPlaceDetailsRequest: () => {} },
    match: { params: { id: 'test' } },
  };
  const placePage = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <PlacePage {...props} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(placePage).toMatchSnapshot();
});
