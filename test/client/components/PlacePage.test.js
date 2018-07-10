import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from '../../../client/containers/PlacePage/PlacePage';

test('With Jest Snapshot, Place Page renders content when place data is present', () => {
  const place = {
    data: {
      id: 'FqnptZYzThkf-4nOTQbBIg',
      alias: 'jts-manukan-grille-quezon-city-2',
      name: "JT's Manukan Grille",
      image_url:
        'https://s3-media4.fl.yelpcdn.com/bphoto/5wSo7ZH1YYHGBn8UAMS9zw/o.jpg',
      is_claimed: false,
      is_closed: false,
      url:
        'https://www.yelp.com/biz/jts-manukan-grille-quezon-city-2?adjust_creative=Jeqz16hF1ke4xj3VOh5vAQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=Jeqz16hF1ke4xj3VOh5vAQ',
      phone: '+6323548983',
      display_phone: '+63 2 354 8983',
      review_count: 2,
      categories: [
        {
          alias: 'filipino',
          title: 'Filipino',
        },
      ],
      rating: 4.5,
      location: {
        address1: '74 Alcaraz Cor Palanan St, Sienna',
        address2: '',
        address3: '',
        city: 'Quezon City',
        zip_code: '',
        country: 'PH',
        state: 'NCR',
        display_address: [
          '74 Alcaraz Cor Palanan St, Sienna',
          'Quezon City, Metro Manila',
          'Philippines',
        ],
        cross_streets: '',
      },
      coordinates: {
        latitude: 14.635065,
        longitude: 121.001045,
      },
      photos: [
        'https://s3-media4.fl.yelpcdn.com/bphoto/5wSo7ZH1YYHGBn8UAMS9zw/o.jpg',
        'https://s3-media1.fl.yelpcdn.com/bphoto/jTf-2Buo0Y3bPDUt_XMlKQ/o.jpg',
      ],
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
  const placePage = renderer.create(<PlacePage place={place} />).toJSON();
  expect(placePage).toMatchSnapshot();
});
