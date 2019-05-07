import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

const offerTitles = [``, ``, ``, ``];

it(`Main screen renders correctly`, () => {
  const tree = renderer
    .create(<Main
      offerTitles = {offerTitles}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
