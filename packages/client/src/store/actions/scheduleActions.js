export const LOAD_SCHEDULE = 'LOAD_SCHEDULE'
export const PUT_SCHEDULE = 'PUT_SCHEDULE'
export const PUT_SCHEDULE_FAIL = 'PUT_SCHEDULE_FAIL'

export const loadSchedule = (group) => {
  return {
    type: LOAD_SCHEDULE,
    payload: {
      group
    }
  }
}

export const putSchedule = (schedule) => {
  return {
    type: PUT_SCHEDULE,
    payload: {
      schedule
    }
  }
}

export const putScheduleFail = (error) => {
  return {
    type: PUT_SCHEDULE_FAIL,
    payload: {
      error
    }
  }
}
