import {connect} from 'react-redux';

import WelcomeCard from '../components/WelcomeCard.jsx';

const mapStateToProps = (state) => ({
  welcomeCard: state.welcomeCard
});

export default connect(mapStateToProps)(WelcomeCard);
