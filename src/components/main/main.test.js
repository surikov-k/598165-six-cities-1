import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import mockLeaflet from '../../mocks/mock-leaflet.js';

const mock = [
  {
    id: 0,
    imgSrc: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Canal View Prinsengracht`,
    type: `apartment`,
    premium: true,
    origin: [0, 0],
  },
];
describe(`Main component`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<Main
        offers={mock}
        leaflet={mockLeaflet}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
