module.exports = {
  mode: 'development',
  entry: './sources/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    watchContentBase: true,
    open: 'Google Chrome'
  }
};
