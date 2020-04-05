export const scores = (state) => state.getIn(['scores'])

export const getMessage = (state) => state.getIn(['scores', 'message'])
export const getVariants = (state) => state.getIn(['scores', 'variants'])
export const getVariant = (state) => state.getIn(['scores', 'variant'])
export const getScores = (state) => state.getIn(['scores', 'scores'])
