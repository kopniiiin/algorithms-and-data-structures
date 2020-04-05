// const path = require('path');

module.exports = {
  mode: 'development',
  entry: './algorithms-and-data-structures/script.js',
  output: {
    filename: 'algorithms-and-data-structures.js',
    path: __dirname
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    watchContentBase: true,
    open: 'Google Chrome'
  }
};
