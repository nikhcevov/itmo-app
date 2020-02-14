const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        HOST_NAME: 'http://localhost:3000'
      }
    }
  }

  return {
    env: {
      HOST_NAME: 'http://sb0101.ru'
    }
  }
};
