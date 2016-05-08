import React from 'react';

import Card from '../components/Card.jsx';

const WelcomeMsg = ({welcomeCard}) => (
  <Card className="welcome-card" {...welcomeCard} />
);

export default WelcomeMsg;
