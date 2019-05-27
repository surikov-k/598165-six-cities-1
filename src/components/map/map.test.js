import React from 'react';
import renderer from 'react-test-renderer';
import mockLeaflet from '../../mocks/mock-leaflet.js';

import Map from './map.jsx';

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
const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

describe(`Map component`, () => {
  it(`renders properly`, () => {
    const tree = renderer.create(
        <Map
          offers={mock}
          leaflet={mockLeaflet}
        />

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
