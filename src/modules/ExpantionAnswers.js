import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  subElem: {
  },
  ansElem: {
  },
  answerLink: {
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: 'red'
    }
  }

}))

export default function ExpansionAnswers (props) {
  const classes = useStyles()
  const { data } = props

  return (
    <div className={classes.root}>
      {data.map((subject, subIndex) => (
        <ExpansionPanel key={(function () { return `sub${subIndex}` })()}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={(function () { return `panel${subIndex}a-content` })()}
            id={(function () { return `panel${subIndex}a-header` })()}
          >
            <Typography className={classes.heading}>{subject.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul className={classes.subList}>
              {subject.answers.map((answer, ansIndex) => (
                <li key={(function () { return `sub${subIndex}-ans${ansIndex}` })()}>
                  <Typography>
                    <a className={classes.answerLink} href={answer.url}>{answer.name}</a>
                  </Typography>
                </li>
              ))}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}
