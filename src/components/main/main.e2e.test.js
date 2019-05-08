import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main.jsx';

Enzyme.configure({adapter: new Adapter()});
const offerTitles = [``, ``, ``, ``];

it(`Click on card header calls callback`, () => {
  const clickHandler = jest.fn();
  const screen = shallow(<Main
    offerTitles = {offerTitles}
    onCardHeaderClick = {clickHandler}
  />);

  const cardHeaderLinks = screen.find(`.place-card__name > a`);

  cardHeaderLinks.at(0).simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
