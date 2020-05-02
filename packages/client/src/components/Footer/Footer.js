import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import navLinks from './footer.json'
import Link from '../Link'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  section: {
    textAlign: 'center',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.getContrastText(theme.palette.primary.main),
  },
  sectionTitle: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  link: {
    transition: 'color 0.2s',
    color: theme.palette.getContrastText(theme.palette.primary.main),
    '&:hover': {
      color: theme.palette.action.hover,
      textDecoration: 'none',
    },
  },
  copyright: {
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='flex-start'
        spacing={4}
      >
        {navLinks.map((section) => (
          <Grid
            item
            className={classes.section}
            key={section.title}
          >
            <Typography className={classes.sectionTitle} variant='body1' noWrap>
              {section.title}
            </Typography>
            <Grid
              container
              direction='column'
            >
              {section.links.map((link) => (
                <Grid item key={link.label}>
                  <Link to={link.href} className={classes.link} variant='body2' noWrap>
                    {link.label}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography className={classes.copyright} variant='body2'>
            <span role='img' aria-label='copyright'>©</span>
            {' '}
            Itmo-app. Сделано с ❤️ для студентов.
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Footer
