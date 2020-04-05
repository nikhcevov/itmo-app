import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  scrollBtn: {
    [theme.breakpoints.down('sm')]: {
      bottom: 20,
      right: 20,
    },
    bottom: 50,
    right: 50,
    position: 'fixed',
    opacity: 0.9,
    zIndex: '50',
  },
}))

const ScrollUpButton = () => {
  const classes = useStyles()
  const [isVisible, setVisibleButton] = useState(false)

  const showButton = () => {
    if (global.pageYOffset > 0) {
      setVisibleButton(true)
    } else {
      setVisibleButton(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', showButton)
  })

  const handleScrollTop = () => {
    global.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Zoom in={isVisible} style={{ transitionDelay: '0ms' }}>
      <Fab
        color='secondary'
        className={classes.scrollBtn}
        onClick={handleScrollTop}
      >
        <UpIcon />
      </Fab>
    </Zoom>
  )
}

export default ScrollUpButton
