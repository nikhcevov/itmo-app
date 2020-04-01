import Answers from './page'

import { connect } from 'react-redux'
import { answersActions } from '../../store/actions'
import { answersSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    answers: answersSelectors.answers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAnswers: () => dispatch(answersActions.loadAnswers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers)
