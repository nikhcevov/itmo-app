import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Rating from '@material-ui/lab/Rating'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ModeComment from '@material-ui/icons/ModeComment'
import Favorite from '@material-ui/icons/Favorite'
import PushingGutterStyles from './pushingGutter.styles'
import LabelIconStyles from './labelIcon.styles'
import RowFlexStyles from './rowFlex.styles'

const useStyles = makeStyles(({ spacing, palette }) => ({
  card: {
    display: 'flex',
    padding: spacing(2),
    borderRadius: 16
  },
  media: {
    minWidth: '25%',
    maxWidth: '25%',
    flexShrink: 0,
    backgroundColor: palette.grey[200],
    borderRadius: 12,
    boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9'
  },
  rating: {
    verticalAlign: 'text-top'
  },
  content: {
    padding: spacing(0, 2, 0, 0)
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginBottom: 0,
    marginRight: spacing(1.5),
    display: 'inline-block'
  },
  body: {
    fontSize: 14,
    color: palette.grey[500]
  },
  divider: {
    margin: spacing(1, 0)
  },
  textFooter: {
    fontSize: 14
  },
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'bottom'
  }
}))

const useGutterStyles = makeStyles(({ spacing }) => PushingGutterStyles({ space: 1.5, spacing }))
const useLabelStyles = makeStyles(({ spacing, palette }) => LabelIconStyles({ linked: true, palette, spacing }))
const useFlexStyles = makeStyles(RowFlexStyles)

const ReviewCard2 = ({ data }) => {
  const styles = useStyles()
  const gutterStyles = useGutterStyles()
  const labelStyles = useLabelStyles()
  const flexStyles = useFlexStyles()
  return (
    <Card className={styles.card} elevation={0}>
      <CardContent className={styles.content}>
        <Box mb={1}>
          <h3 className={styles.heading}>{data.name} </h3>
          <Rating
            name='rating'
            value={2}
            className={styles.rating}
            size='small'
          />
        </Box>
        <p className={styles.body}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          credit (www.brighttv.co.th)
        </p>
        <Divider className={styles.divider} light />
        <div className={flexStyles.parent}>
          <Link
            className={cx(labelStyles.primaryLink, styles.textFooter)}
            component='button'
          >
            Read more <ArrowForwardIos className={labelStyles.icon} />
          </Link>
          <div
            className={cx(
              flexStyles.rightChild,
              flexStyles.parent,
              gutterStyles.parent
            )}
          >
            <button type='button' className={labelStyles.link}>
              <ModeComment className={labelStyles.icon} /> 135
            </button>
            <button type='button' className={labelStyles.link}>
              <Favorite className={labelStyles.icon} /> 12
            </button>
          </div>
        </div>
      </CardContent>
      <CardMedia
        className={styles.media}
        image={data.img}
      />
    </Card>
  )
}

export default ReviewCard2