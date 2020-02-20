import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 400
  },
  difficultyText: {
    color: 'red'
  }
})

export default function WatcherCard (props) {
  const classes = useStyles()
  const { data, onClose } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Card className={classes.root} onClick={handleClose}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.img}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.name}
          </Typography>
          <Typography gutterBottom variant='subtitle2' className={classes.difficultyText}>
            Сложность: {data.difficulty}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Proident nostrud quis ut ut consequat dolore. Consectetur cupidatat mollit id ipsum ea Lorem in dolore ea ullamco. Amet velit fugiat nisi esse nostrud in ullamco.
Non enim voluptate ullamco ut consectetur ex in proident eu nisi officia deserunt et adipisicing. Excepteur veniam Lorem irure commodo excepteur laboris aliquip qui duis amet ut commodo non. Sunt eiusmod do laboris velit veniam aliqua nulla magna pariatur dolor amet quis nisi. Cillum minim exercitation ut ad ex dolore.
Ipsum magna voluptate ut aliqua aliqua id. Nisi occaecat ipsum ipsum minim eiusmod. Ex pariatur in et id dolor anim sunt veniam est sit laboris. Quis elit qui exercitation nulla consectetur excepteur cillum cillum anim cillum anim in. Consequat consectetur proident ea nulla aliquip.
Eiusmod laboris sunt ad magna anim ex laboris laboris anim id labore anim. Laboris ut labore elit labore reprehenderit ea labore magna esse officia ullamco. Tempor do officia commodo ea officia proident ipsum consequat occaecat amet elit proident do.
Deserunt pariatur id Lorem nisi officia ipsum do. Mollit do sit reprehenderit aute labore tempor Lorem officia. Deserunt ut fugiat laboris tempor sint veniam ut mollit commodo dolore in. Aliqua duis do reprehenderit in non ex do in. Enim cupidatat ipsum minim exercitation do nostrud occaecat laborum est cillum cillum exercitation. Ut ipsum reprehenderit sunt commodo sit aliquip officia anim fugiat laborum eu. Pariatur laborum incididunt ad labore nulla qui cillum voluptate.
Cupidatat cupidatat et id reprehenderit consectetur nulla deserunt non occaecat laborum ut ullamco pariatur. Lorem quis aliquip non tempor est do fugiat. Qui qui reprehenderit anim minim in aliquip in ipsum magna dolore reprehenderit. Ex elit esse esse dolore quis ullamco consequat ut laboris in deserunt dolore.
Labore dolore ipsum nulla nulla adipisicing irure quis. Quis eu amet exercitation eiusmod tempor non tempor esse. Ea Lorem pariatur dolore minim reprehenderit amet magna sint commodo culpa eiusmod. Velit minim esse proident laboris duis ad enim aliqua labore dolor sint nulla minim. Sit labore eu magna nulla occaecat velit.
Esse pariatur sit exercitation aliqua minim Lorem deserunt. Qui voluptate nostrud nostrud ea sunt ipsum exercitation veniam. Enim quis labore enim sint. Deserunt est duis tempor consequat ullamco aute.
Excepteur veniam eiusmod reprehenderit occaecat cillum magna esse officia consequat adipisicing in. Sint dolor non magna consequat officia sunt est ea Lorem cupidatat eu. Do enim pariatur proident et irure veniam.
Officia do magna nulla ea. Qui nostrud tempor Lorem Lorem consequat nostrud exercitation ad. Magna cillum magna sunt id ad cupidatat Lorem minim irure ullamco ex. Id laborum fugiat do laboris anim id aute cupidatat aliqua sunt minim id. Exercitation tempor officia Lorem cillum et esse est irure ullamco anim cupidatat aliquip cupidatat id. Aute voluptate consectetur esse cillum.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
