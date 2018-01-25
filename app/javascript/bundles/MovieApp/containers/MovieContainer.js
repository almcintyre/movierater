
import { connect } from 'react-redux';
import Movie from '../components/Movie';
// import * as actions from '../actions/movieActionCreators';

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, null)(Movie);
