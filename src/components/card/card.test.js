import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const mock = {
  id: 0,
  imgSrc: `img/apartment-01.jpg`,
  price: 120,
  rating: 4,
  name: `Canal View Prinsengracht`,
  type: `apartment`,
  premium: true,
};

it(`renders correctly`, () => {
  const cardData = mock;
  const tree = renderer
    .create(
        <Card
          card={cardData}
          handlerImgClick={() => {}}
          handlerMouseEnter={() => {}}
          handlerMouseLeave={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
