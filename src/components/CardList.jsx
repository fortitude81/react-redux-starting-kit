import React from 'react';
import Card from '../components/Card.jsx';

export default ({cards}) => (
  <div className="cards-wrapper">
    {cards.map((card, index) => (
      <Card
        key={index}
        className="card-item"
        {...card}
      />
    ))}
  </div>
);
