import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    minWidth: 200,
  },
  teacherName: {
  },
  difficultyText: {
    color: theme.palette.secondary.main,
  },
}));

const WatcherModal = ({ onClose, open, data }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      maxWidth={false}
      onClose={handleClose}
      open={open}
      scroll='body'
    >
      <Card onClick={handleClose}>
        <CardActionArea>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='stretch'
            spacing={0}
          >
            <Grid item xs>
              <CardMedia
                className={classes.media}
                image={data.img}
                title={data.name}
              />
            </Grid>

            <Grid item xs>
              <CardContent>
                <Typography gutterBottom variant='h5' className={classes.teacherName}>
                  {data.name}
                </Typography>
                <Typography gutterBottom variant='body1' className={classes.difficultyText}>
                  Сложность:
                  {' '}
                  {data.difficulty}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Здесь будет всякого рода информация о смотрящем.
                </Typography>
              </CardContent>
            </Grid>

          </Grid>
        </CardActionArea>
      </Card>
    </Dialog>
  );
};

WatcherModal.propTypes = {
  data: PropTypes.shape({
    difficulty: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
  }),
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

WatcherModal.defaultProps = {
  data: {
    difficulty: '',
    name: '',
    img: '',
  },
  onClose: () => {},
  open: () => false,
};

export default WatcherModal;
