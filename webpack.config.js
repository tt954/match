const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public', 'static', 'bundle'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
