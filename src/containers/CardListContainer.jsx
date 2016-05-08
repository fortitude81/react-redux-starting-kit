import {connect} from 'react-redux';

import CardList from '../components/CardList.jsx';

const mapStateToProps = (state) => ({
  cardList: state.cardList
});

export default connect(mapStateToProps)(CardList);
