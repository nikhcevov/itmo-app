export const watchers = (state) => state.getIn(['watchers']);

export const getWatchers = (state) => state.getIn(['watchers', 'watchers']);
export const getMessage = (state) => state.getIn(['watchers', 'message']);
