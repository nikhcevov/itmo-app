import Schedule from './page'
import { connect } from 'react-redux'
import { scheduleActions } from '../../store/actions'
import { scheduleSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    message: scheduleSelectors.getMessage(state),
    group: scheduleSelectors.getGroup(state),
    odd: scheduleSelectors.getOdd(state),
    even: scheduleSelectors.getEven(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSchedule: (group) => dispatch(scheduleActions.loadSchedule(group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
