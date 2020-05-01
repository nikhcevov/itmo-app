import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined'
import BrightnessLowOutlinedIcon from '@material-ui/icons/BrightnessLowOutlined'


const useStyles = makeStyles((theme) => ({
  icon: {
    width: '100%',
    height: '100%',
  },
}))

const ToggleTheme = ({
  currentTheme,
  setTheme,
  ...props
}) => {
  const classes = useStyles()

  const handleChangeTheme = () => {
    if (currentTheme.palette.type === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <IconButton onClick={handleChangeTheme} {...props}>
      {currentTheme.palette.type === 'light' ? <Brightness2OutlinedIcon className={classes.icon} /> : <BrightnessLowOutlinedIcon className={classes.icon} />}
    </IconButton>
  )
}

export default ToggleTheme
