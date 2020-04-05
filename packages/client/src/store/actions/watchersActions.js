export const LOAD_WATCHERS = 'LOAD_WATCHERS'
export const PUT_WATCHERS = 'PUT_WATCHERS'
export const PUT_WATCHERS_FAIL = 'PUT_WATCHERS_FAIL'

export const loadWatchers = () => ({
  type: LOAD_WATCHERS,
})

export const putWatchers = (watchers) => ({
  type: PUT_WATCHERS,
  payload: {
    watchers,
  },
})

export const putWatchersFail = (error) => ({
  type: PUT_WATCHERS_FAIL,
  payload: {
    error,
  },
})
