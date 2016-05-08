import React from 'react';

import Card from '../components/Card.jsx';

const CardList = ({cardList}) => (
  <div className="cards-wrapper">
    {cardList.map((card, index) => (
      <Card key={index} className="card-item" {...card} />
    ))}
  </div>
);

export default CardList;
