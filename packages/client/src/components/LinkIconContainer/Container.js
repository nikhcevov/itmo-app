import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


import ScheduleIcon from '@material-ui/icons/Schedule'
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

import Link from '../Link'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  linkIcon: {
    color: theme.palette.secondary.main,
    width: 100,
    height: 100,
    transform: 'scale(1)',
    transition: 'transform 0.3s, color 0.3s',
    '&:hover': {
      color: theme.palette.action.hover,
      transform: 'scale(1.1)',
    },
  },
}))

const LinkIconContainer = () => {
  const classes = useStyles()

  const links = [
    {
      icon: <ScheduleIcon className={classes.linkIcon} />,
      name: 'Расписание',
      href: '/schedule',
    },

    {
      icon: <DescriptionOutlinedIcon className={classes.linkIcon} />,
      name: 'Шпаргалки',
      href: '/answers',
    },

    {
      icon: <SchoolOutlinedIcon className={classes.linkIcon} />,
      name: 'Баллы',
      href: '/scores',
    },

    {
      icon: <VisibilityOutlinedIcon className={classes.linkIcon} />,
      name: 'Надзиратели',
      href: '/watchers',
    },
  ]

  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='flex-start'
        spacing={3}
      >

        {links.map((link) => (
          <Grid key={link.name} item>
            <Link to={link.href}>
              {link.icon}
            </Link>
          </Grid>
        ))}

      </Grid>
    </div>
  )
}

export default LinkIconContainer
