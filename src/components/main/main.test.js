import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mock = [
  {
    id: 0,
    imgSrc: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Canal View Prinsengracht`,
    type: `apartment`,
    premium: true,
  },
];

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main
      offers={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
