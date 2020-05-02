import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Link from '@material-ui/core/Link'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Modal from './Modal'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  name: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  moreIcon: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  answerLink: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  },
  ul: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.action.selected,
    },
  },
}))

const constructUrl = (url) => process.env.REACT_APP_HOST_API + url

const Answers = ({ answers }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {answers.map((subject, subIndex) => (
        <ExpansionPanel key={`sub${subIndex}`}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.moreIcon} />}
          >
            <Typography className={classes.name}>{subject.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              {subject.answers.map((answer, ansIndex) => (
                <li className={classes.ul} key={`sub${subIndex}-ans${ansIndex}`}>
                  <Link
                    className={classes.answerLink}
                    href={constructUrl(answer.url)}
                    underline='none'
                  >
                    {answer.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}

export default Answers
