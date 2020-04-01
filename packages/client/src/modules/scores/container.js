import Scores from './page'
import { connect } from 'react-redux'
import { scoresActions } from '../../store/actions'
import { scoresSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    scores: scoresSelectors.scores(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadScores: () => dispatch(scoresActions.loadScores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores)
