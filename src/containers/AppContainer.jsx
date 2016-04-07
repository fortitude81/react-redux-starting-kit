import React from 'react';

import WelcomeMsgContainer from '../containers/WelcomeMsgContainer.jsx';

const AppConainer = () => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="mdl-grid">
          <WelcomeMsgContainer />
        </div>
      </div>
    </div>
  </div>
);

export default AppConainer;
