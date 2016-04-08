import React from 'react';

const MiniDashboard = () => (
  <div className="demo-cards mdl-cell--12-col mdl-grid">

    <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
        <h2 className="mdl-card__title-text">{`Foo`}</h2>
      </div>
      <div className="mdl-card__supporting-text mdl-color-text--grey-600">
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.`}
      </div>
    </div>

    <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
        <h2 className="mdl-card__title-text">{`Bar`}</h2>
      </div>
      <div className="mdl-card__supporting-text mdl-color-text--grey-600">
        {`Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.`}
      </div>
    </div>

  </div>
);

export default MiniDashboard;
