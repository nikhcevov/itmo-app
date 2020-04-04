import { connect } from 'react-redux';
import Scores from './page';
import { scoresActions } from '../../store/actions';
import { scoresSelectors } from '../../store/selectors';

const mapStateToProps = (state) => ({
  message: scoresSelectors.getMessage(state),
  scores: scoresSelectors.getScores(state),
  variant: scoresSelectors.getVariant(state),
  variants: scoresSelectors.getVariants(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadScores: (login, password, group, semester) => dispatch(scoresActions.loadScores(login, password, group, semester)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
