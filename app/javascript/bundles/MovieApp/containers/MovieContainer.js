
import { connect } from 'react-redux';
import MovieApp from '../components/MovieApp';
import * as actions from '../actions/movieActionCreators';
import ReduxThunk from 'redux-thunk';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({ data: state.data });
export default connect(mapStateToProps, actions)(MovieApp);
