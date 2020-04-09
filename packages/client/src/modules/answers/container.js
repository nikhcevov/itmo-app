import { connect } from 'react-redux'
import Answers from './page'

import { answersActions } from '../../store/actions'
import { answersSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  status: answersSelectors.getStatus(state),
  answers: answersSelectors.getAnswers(state),
})

const mapDispatchToProps = (dispatch) => ({
  loadAnswers: () => dispatch(answersActions.load.base()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Answers)
