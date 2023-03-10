import React from "react";

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return(
    <div className="card card-template">
      <button className="button card__del-btn" type="button"></button>
      <img src={card.link} alt={card.name} className="card__image"
      onClick={handleClick}/>
      <div className="card__about">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="button card__like-btn" type="button"></button>
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  )
};

export default Card;