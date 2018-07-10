import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { PlacePage } from '../../../client/containers/PlacePage/PlacePage';

test('With Jest Snapshot, Place Page renders content when place data is present', () => {
  const place = {
    data: {
      id: 'TEST',
      name: 'TEST',
      is_closed: false,
      url: 'https://www.yelp.com/test',
      phone: '+6323548983',
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
        address1: 'TEST',
        address2: '',
        address3: '',
        city: 'Quezon City',
        zip_code: '',
        country: 'PH',
        state: 'NCR',
        display_address: ['Test'],
        cross_streets: '',
      },
      coordinates: {
        latitude: 1,
        longitude: 1,
      },
      photos: ['https://test.com'],
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
  const placePage = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <PlacePage
          actions={{ fetchPlaceDetailsRequest: () => {} }}
          place={place}
          match={{ params: { id: 'test' } }}
        />
      </MemoryRouter>,
    )
    .toJSON();
  expect(placePage).toMatchSnapshot();
});
