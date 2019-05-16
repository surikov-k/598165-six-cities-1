import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

class OffersList extends React.PureComponent {
  setActiveCard(id) {
    this.setState({
      activeCard: id
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {
      offers,
      handlerCardTitleClick,
    } = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((it) =>
        <Card
          key={it.id}
          card={it}
          handlerMouseEnter={() => {
            this.setActiveCard(it.id);
            // this.setState({
            //   activeCard: it.id
            // });
          }
          }
          handlerMouseLeave={() => {
            this.setActiveCard(null);

            // this.setState({
            //   activeCard: null
            // });
          }}
          handlerImgClick={() => {
            this.setActiveCard(it.id);

            // this.setState({
            //   activeCard: it.id
            // });
          }}
          handlerCardTitleClick={handlerCardTitleClick}
        />
      )}
    </div >;
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    premium: PropTypes.bool,
  })),
  handlerCardTitleClick: PropTypes.func
};

export default OffersList;
