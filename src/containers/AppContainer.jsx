import React from 'react';

import WelcomeMsgContainer from '../containers/WelcomeMsgContainer.jsx';
import MiniDashboardContainer from '../containers/MiniDashboardContainer.jsx';

const AppConainer = () => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <WelcomeMsgContainer />
        <MiniDashboardContainer />
      </div>
    </div>
  </div>
);

export default AppConainer;
