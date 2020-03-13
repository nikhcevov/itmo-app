/*
interface PreparedScores {
  name: String,
  type: string,
  score: number
} */

export default function getScoresByGroupAndSem (scores, group, sem) {
  const years = scores.years.filter(year => year.studyyear.length === 9)
  const result = []
  for (const year of years) {
    for (const subj of year.subjects) {
      if (subj.semester === String(sem) && year.group === group) {
        // Total scores
        let totalScore

        if (subj.points && subj.points.length > 0) {
          const total = subj.points.find(i => i.max === '100')
          totalScore = +total.value.split(',').join('.')
        } else totalScore = null

        // Subject type
        let type
        if (subj.marks && subj.marks.length > 1) {
          const allowed = subj.marks.find(
            i => i.worktype === 'Зачет' || i.worktype === 'Экзамен'
          )
          type = allowed && allowed.worktype
        } else if (subj.marks && subj.marks[0].worktype) {
          type = subj.marks[0].worktype
        } else type = null

        result.push({
          scores: subj.points || [],
          name: subj.name,
          totalScore: totalScore,
          type: type
        })
      }
    }
  }
  return result
}
