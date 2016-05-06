import React from 'react';

import WelcomeCardContainer from '../containers/WelcomeCardContainer.jsx';
import CardListContainer from '../containers/CardListContainer.jsx';

export default () => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="dashboard-wrapper">
          <WelcomeCardContainer />
          <CardListContainer />
        </div>
      </div>
    </div>
  </div>
);
