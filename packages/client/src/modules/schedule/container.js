import { connect } from 'react-redux';
import Schedule from './page';
import { scheduleActions } from '../../store/actions';
import { scheduleSelectors } from '../../store/selectors';

const mapStateToProps = (state) => ({
  message: scheduleSelectors.getMessage(state),
  group: scheduleSelectors.getGroup(state),
  odd: scheduleSelectors.getOdd(state),
  even: scheduleSelectors.getEven(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadSchedule: (group) => dispatch(scheduleActions.loadSchedule(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
