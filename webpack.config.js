const { join } = require('path');
const Dotenv = require('dotenv-webpack');
const { env } = require('./dotenv-reader');

module.exports = {
  mode: env.WEBPACK_MODE,
  target: env.WEBPACK_TARGET,
  entry: join(__dirname, './example/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'webpack-dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
    ],
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [new Dotenv()],
  devServer: {
    contentBase: join(__dirname, './example'),
    compress: true,
    port: env.WEBPACK_DEV_SERVER_PORT,
    publicPath: '/webpack-dist/',
    writeToDisk: true,
  },
};
