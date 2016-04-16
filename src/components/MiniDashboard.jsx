import React from 'react';
import SimpleCard from '../components/SimpleCard.jsx';

const MiniDashboard = ({entries}) => (
  <div className="cards-wrapper">
    {entries.map((entry, index) => <SimpleCard key={index} {...entry} />)}
  </div>
);

export default MiniDashboard;
