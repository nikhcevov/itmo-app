import { connect } from 'react-redux'
import Scores from './page'
import { scoresActions } from '../../store/actions'
import { scoresSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  status: scoresSelectors.getStatus(state),
  message: scoresSelectors.getMessage(state),
  variants: scoresSelectors.getVariants(state),
  variant: scoresSelectors.getVariant(state),
  scores: scoresSelectors.getScores(state),
})

const mapDispatchToProps = (dispatch) => ({
  loadScores: (group, semester) => dispatch(
    scoresActions.load.base({
      group,
      semester,
    }),
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Scores)
