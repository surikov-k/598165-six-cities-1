import React from "react";
import PropTypes from "prop-types";
import {Main} from "../main/main.jsx";

export const App = (props) => {
  App.propTypes = {
    offerTitles: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  const {offerTitles} = props;
  return <Main offerTitles = {offerTitles} />;
};
