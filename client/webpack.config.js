const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
    publicPath: ''
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  }
};
