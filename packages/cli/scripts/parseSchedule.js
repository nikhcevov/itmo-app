module.exports = function (dom) {
  const answer = {
    odd: [],
    even: []
  }
  Array.from(dom.window.document.querySelectorAll('.rasp_tabl_day > table.rasp_tabl')).map(dayTable => {
    const day = {
      weekDay: dayTable.rows.item(0).cells.item(0).childNodes.length && dayTable.rows.item(0).cells.item(0).lastChild.textContent,
      lessons: []
    }
    for (let i = 0; i < dayTable.rows.length; i++) {
      if (dayTable.rows.item(i).cells.length > 3) {
        const row = {
          timeStart: '',
          timeEnd: '',
          weekType: '',
          room: '',
          adress: '',
          lesson: '',
          teacher: ''
        }
        const timeCell = [].concat(dayTable.rows.item(i).cells.item(1).textContent.replace(/\t+/g, '').trim().split('\n').map(elem => elem.trim()))
        const roomCell = [].concat(dayTable.rows.item(i).cells.item(2).textContent.replace(/\t+/g, '').trim().split('\n').map(elem => elem.trim()))
        const lessonCell = [].concat(dayTable.rows.item(i).cells.item(3).textContent.replace(/\t+/g, '').trim().split('\n').map(elem => elem.trim()))
        while (timeCell.length > 2) {
          timeCell.pop()
        }
        row.lesson = lessonCell[0]; // EXTREMELY IMPORTANT ';'
        [row.timeStart, row.timeEnd] = timeCell[0].split('-')
        if (timeCell.length === 2) {
          row.weekType = timeCell[1]
          if (lessonCell.length === 3) {
            row.teacher = lessonCell[2]
          }
        }
        if (roomCell.length === 2) {
          [row.room, row.adress] = roomCell
        } else if (roomCell.length === 1) {
          row.adress = roomCell[0]
        }
        day.lessons.push(row)
      }
    }
    return day
  }).forEach(day => {
    day.lessons.forEach(lesson => {
      switch (lesson.weekType) {
        case 'нечетная неделя': {
          const existOdd = answer.odd.find(answerDay => answerDay.weekDay === day.weekDay)
          if (existOdd === undefined) {
            const newLessons = []
            newLessons.push(lesson)
            answer.odd.push({ weekDay: day.weekDay, lessons: newLessons })
          } else {
            existOdd.lessons.push(lesson)
          }
          break
        }
        case 'четная неделя': {
          const existEven = answer.even.find(answerDay => answerDay.weekDay === day.weekDay)
          if (existEven === undefined) {
            const newLessons = []
            newLessons.push(lesson)
            answer.even.push({ weekDay: day.weekDay, lessons: newLessons })
          } else {
            existEven.lessons.push(lesson)
          }
          break
        }
        default: {
          const existOdd = answer.odd.find(answerDay => answerDay.weekDay === day.weekDay)
          const existEven = answer.even.find(answerDay => answerDay.weekDay === day.weekDay)
          if (existOdd === undefined) {
            const newLessons = []
            newLessons.push(lesson)
            answer.odd.push({ weekDay: day.weekDay, lessons: newLessons })
          } else {
            existOdd.lessons.push(lesson)
          }
          if (existEven === undefined) {
            const newLessons = []
            newLessons.push(lesson)
            answer.even.push({ weekDay: day.weekDay, lessons: newLessons })
          } else {
            existEven.lessons.push(lesson)
          }
        }
      }
    })
  })
  return answer
}
