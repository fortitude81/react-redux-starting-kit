import React from 'react';

import MiniDashboardContainer from '../containers/MiniDashboardContainer.jsx';
import WelcomeMsgContainer from '../containers/WelcomeMsgContainer.jsx';

const AppConainer = () => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="mdl-grid">
          <WelcomeMsgContainer />
        </div>
        <div className="mdl-grid">
          <MiniDashboardContainer />
        </div>
      </div>
    </div>
  </div>
);

export default AppConainer;
