import Schedule from './page'
import { connect } from 'react-redux'
import { scheduleActions } from '../../store/actions'
import { scheduleSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    schedule: scheduleSelectors.schedule(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSchedule: (group) => dispatch(scheduleActions.loadSchedule(group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
