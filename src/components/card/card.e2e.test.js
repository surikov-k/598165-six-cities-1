import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  id: 0,
  imgSrc: `img/apartment-01.jpg`,
  price: 120,
  rating: 4,
  name: `Canal View Prinsengracht`,
  type: `apartment`,
  premium: true,
};

it(`passes to onImageClick callback correct card id`, () => {
  const onImageClick = jest.fn((card) => {
    return card.id;
  });

  const card = mount(<Card
    card={mock}
    handlerImgClick={onImageClick}
    handlerMouseEnter={() => {}}
    handlerMouseLeave={() => {}}
  />);

  const img = card.find(`.place-card__image`);
  img.simulate(`click`);

  expect(onImageClick).toHaveBeenCalledTimes(1);
  expect(onImageClick(card.props().card)).toBe(0);
});
