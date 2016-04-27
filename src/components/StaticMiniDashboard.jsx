import React from 'react';
import '../scss/simpleCard.scss';

export default ({ welcomeMsg, cards }) => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="simple-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title"
            style={{background: 'url(' + welcomeMsg.imgUrl  + ') center/cover'}}>
            <h2 className="mdl-card__title-text">{welcomeMsg.title}</h2>
          </div>
          <div className="mdl-card__supporting-text">{welcomeMsg.msg}</div>
        </div>
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div key={index} className="simple-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title"
                style={{background: 'url(' + card.imgUrl  + ') center/cover'}}>
                <h2 className="mdl-card__title-text">{card.title}</h2>
              </div>
              <div className="mdl-card__supporting-text">{card.msg}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
