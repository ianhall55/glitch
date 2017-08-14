
var path = require("path");

module.exports = {
  context: __dirname,
  entry: [
    "./frontend/glitch.js"
  ],
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ],
    modules: [
      path.resolve('./node_modules')
    ]
  }
};
