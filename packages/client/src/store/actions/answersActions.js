export const LOAD_ANSWERS = 'LOAD_ANSWERS'
export const PUT_ANSWERS = 'PUT_ANSWERS'
export const PUT_ANSWERS_FAIL = 'PUT_ANSWERS_FAIL'

export const loadAnswers = () => {
  return {
    type: LOAD_ANSWERS
  }
}

export const putAnswers = (answers) => {
  return {
    type: PUT_ANSWERS,
    payload: {
      answers
    }
  }
}

export const putAnswersFail = (error) => {
  return {
    type: PUT_ANSWERS_FAIL,
    payload: {
      error
    }
  }
}
