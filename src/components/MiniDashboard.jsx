import React from 'react';

const MiniDashboard = () => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="mdl-grid">
          <div className="demo-cards mdl-cell--12-col mdl-grid">

            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 className="mdl-card__title-text">{`Foo`}</h2>
              </div>
              <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                {`Non dolore elit adipisicing ea reprehenderit consectetur culpa.`}
              </div>
            </div>

            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--deep-purple-500">
                <h2 className="mdl-card__title-text">{`Bar`}</h2>
              </div>
              <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                {`Non dolore elit adipisicing ea reprehenderit consectetur culpa.`}
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mdl-layout__obfuscator"></div>
    </div>
  </div>
);

export default MiniDashboard;
