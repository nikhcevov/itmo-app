import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Grid from '@material-ui/core/Grid'
import Link from '../modules/Link'

const useStyles = makeStyles(theme => ({
  root: {
  },
  linkIcon: {
    color: 'white',
    width: 100,
    height: 100,
    transform: 'scale(1)',
    transition: 'transform 0.3s, color 0.3s',
    '&:hover': {
      color: theme.palette.secondary.main,
      transform: 'scale(1.1)'
    }
  }
}))

export default function linksIconContainer () {
  const classes = useStyles()

  const links = [
    {
      icon: <ScheduleIcon className={classes.linkIcon} />,
      name: 'Расписание занятий',
      href: '/schedule'
    },

    {
      icon: <DescriptionOutlinedIcon className={classes.linkIcon} />,
      name: 'Ответы',
      href: '/answers'
    },

    {
      icon: <CheckCircleOutlineOutlinedIcon className={classes.linkIcon} />,
      name: 'Баллы',
      href: '/scores'
    },

    {
      icon: <VisibilityOutlinedIcon className={classes.linkIcon} />,
      name: 'Расписание смотрящих ЦДО',
      href: '/watchers'
    },

    {
      icon: <MonetizationOnOutlinedIcon className={classes.linkIcon} />,
      name: 'Помощь разработчикам',
      href: '/sponsorship'
    },

    {
      icon: <HelpOutlineIcon className={classes.linkIcon} />,
      name: 'Вопросы',
      href: '/'
    }
  ]

  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='flex-start'
        spacing={0}
      >

        {links.map((link) => (
          <Grid key={link.name} item>
            <Link href={link.href}>
              {link.icon}
            </Link>
          </Grid>
        ))}

      </Grid>
    </div>
  )
}
