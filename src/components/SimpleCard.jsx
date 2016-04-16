import React from 'react';
import '../scss/simpleCard.scss';

export default ({title, msg, imgUrl}) => (
  <div className="simple-card-wide mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title"
      style={{background: 'url(' + imgUrl  + ') center/cover'}}>
      <h2 className="mdl-card__title-text">{title}</h2>
    </div>
    <div className="mdl-card__supporting-text">{msg}</div>
  </div>
);
