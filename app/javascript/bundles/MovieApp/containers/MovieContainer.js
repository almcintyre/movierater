
import { connect } from 'react-redux';
import MovieApp from '../components/MovieApp';
import * as actions from '../actions/movieActionCreators';

const mapStateToProps = (state) => ({ data: state.data });
export default connect(mapStateToProps, actions)(MovieApp);
