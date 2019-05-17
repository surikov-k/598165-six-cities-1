import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offers} = props;
  return <Main
    offers={offers}
    handlerCardTitleClick={() => {}}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    premium: PropTypes.bool,
  }))
};

export default App;
