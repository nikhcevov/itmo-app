export const schedule = (state) => state.getIn(['schedule'])

export const getMessage = (state) => state.getIn(['schedule', 'message'])
export const getGroup = (state) => state.getIn(['schedule', 'group'])
export const getOdd = (state) => state.getIn(['schedule', 'odd'])
export const getEven = (state) => state.getIn(['schedule', 'even'])
