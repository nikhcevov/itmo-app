import { connect } from 'react-redux'
import Watchers from './page'

import { watchersActions } from '../../store/actions'
import { watchersSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  status: watchersSelectors.getStatus(state),
  watchers: watchersSelectors.getWatchers(state),
})

const mapDispatchToProps = (dispatch) => ({
  loadWatchers: () => dispatch(watchersActions.load.base()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Watchers)
