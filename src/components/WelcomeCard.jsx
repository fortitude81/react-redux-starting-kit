import React from 'react';
import Card from '../components/Card.jsx';

export default ({welcomeMsg}) => (
  <Card className="welcome-card" {...welcomeMsg} />
);
