export const LOAD_SCORES = 'LOAD_SCORES'
export const PUT_SCORES = 'PUT_SCORES'
export const PUT_SCORES_FAIL = 'PUT_SCORES_FAIL'

export const loadScores = (login, password, group, semester) => {
  return {
    type: LOAD_SCORES,
    payload: {
      login,
      password,
      group,
      semester
    }
  }
}

export const putScores = (scores) => {
  return {
    type: PUT_SCORES,
    payload: {
      scores
    }
  }
}

export const putScoresFail = (error) => {
  return {
    type: PUT_SCORES_FAIL,
    payload: {
      error
    }
  }
}
