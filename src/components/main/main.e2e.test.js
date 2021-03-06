import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import mockLeaflet from '../../mocks/mock-leaflet.js';

Enzyme.configure({adapter: new Adapter()});
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

it(`calls callback when card header was clicked`, () => {
  const clickHandler = jest.fn();
  const screen = mount(<Main
    offers = {mock}
    handlerCardTitleClick = {clickHandler}
    leaflet={mockLeaflet}
  />);

  const cardHeaderLinks = screen.find(`.place-card__name > a`);

  cardHeaderLinks.at(0).simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
