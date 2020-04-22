export default ({ transitions }) => ({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: 24,
    transition: ['fill', `${transitions.duration.standard}ms`, transitions.easing.standard],
  },
  colorInherit: {
    '&&': {
      color: 'currentColor', // to override color for icons with default color
    },
    fill: 'currentColor',
  },
})
