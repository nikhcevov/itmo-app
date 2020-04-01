import Watchers from './page'

import { connect } from 'react-redux'
import { watchersActions } from '../../store/actions'
import { watchersSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    watchers: watchersSelectors.watchers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadWatchers: () => dispatch(watchersActions.loadWatchers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchers)
