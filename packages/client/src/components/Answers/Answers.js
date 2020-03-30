import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  answerLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: 'red',
    },
  },
}));

const constructUrl = (url) => process.env.HOST_API + url;

const Answers = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((subject, subIndex) => (
        <ExpansionPanel key={`sub_${subIndex}`}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>{subject.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              {subject.answers.map((answer, ansIndex) => (
                <li key={`sub${subIndex}_ans${ansIndex}`}>
                  <Typography>
                    <a
                      className={classes.answerLink}
                      href={constructUrl(answer.url)}
                    >
                      {answer.name}
                    </a>
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

Answers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
  })),
};

Answers.defaultProps = {
  data: [{
    answers: {
      name: '',
      url: '',
    },
  }],
};

export default Answers;
