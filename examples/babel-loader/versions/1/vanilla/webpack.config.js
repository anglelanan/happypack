const path = require('path');
const e = require('@happypack/example-utils')

module.exports = {
  context: path.resolve(__dirname),
  entry: path.join(e.exampleDir(module), 'lib/a.js'),

  output: {
    path: e.outputDir(module),
    filename: '[name].js'
  },

  resolveLoader: {
    root: [
      path.resolve(__dirname, '../node_modules')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(e.exampleDir(module), 'lib')
        ],
        loader: 'babel',
        query: {
          plugins: [
            require.resolve('babel-plugin-transform-runtime'),
          ],
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react')
          ],
          cacheDirectory: false
        }
      }
    ]
  }
}