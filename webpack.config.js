const path = require('path')

module.exports = {
  entry: './public/luigi-config.js',
  output: {
    filename: 'luigi-config.js',
    path: path.resolve(__dirname, 'public'),
  },
}
