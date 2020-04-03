import Scores from './page'
import { connect } from 'react-redux'
import { scoresActions } from '../../store/actions'
import { scoresSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    message: scoresSelectors.getMessage(state),
    scores: scoresSelectors.getScores(state),
    variant: scoresSelectors.getVariant(state),
    variants: scoresSelectors.getVariants(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadScores: (login, password, group, semester) => dispatch(scoresActions.loadScores(login, password, group, semester))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores)
