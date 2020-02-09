import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import Container from '@material-ui/core/Container'

// pick a date util library
import DateFnsUtils from '@date-io/date-fns'

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date())

  // prettier-ignore
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container width='xs'>
        <DatePicker
          autoOk
          orientation='portrait'
          variant='dialog'
          openTo='date'
          value={date}
          onChange={changeDate}
        />
      </Container>

    </MuiPickersUtilsProvider>
  )
}

export default StaticDatePicker
