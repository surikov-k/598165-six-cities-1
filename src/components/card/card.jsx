import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
    };
  }

  render() {
    const {
      card,
      handlerMouseEnter,
      handlerMouseLeave,
      handlerImgClick,
      handlerCardTitleClick,
    } = this.props;
    const {bookmarked} = this.state;

    return <article className="cities__place-card place-card"
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}>

      {card.premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={card.imgSrc} width="260" height="200" alt={card.name} onClick={handlerImgClick} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            `place-card__bookmark-button
            ${bookmarked ? `place-card__bookmark-button--active` : ``}
            button`
          } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: card.rating * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={handlerCardTitleClick}>
          <a href="#">{card.name}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article >;
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    premium: PropTypes.bool,
  }),
  handlerMouseEnter: PropTypes.func.isRequired,
  handlerMouseLeave: PropTypes.func.isRequired,
  handlerImgClick: PropTypes.func.isRequired,
  handlerCardTitleClick: PropTypes.func,
  bookmarked: PropTypes.bool,
};

export default Card;
