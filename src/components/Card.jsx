import React from 'react';

export default ({className, imgUrl, title, msg}) => (
  <div className={className}>
    <div 
      className="mdl-card__title"
      style={{background: 'url(' + imgUrl  + ') center/cover'}}
    >
      <h2 className="mdl-card__title-text">{title}</h2>
    </div>
    <div className="mdl-card__supporting-text">{msg}</div>
  </div>
);
