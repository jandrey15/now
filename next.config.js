const withSass = require('@zeit/next-sass')

module.exports = {
  withSass: withSass(),
  target: 'serverless'
}

// module.exports = withSass()
