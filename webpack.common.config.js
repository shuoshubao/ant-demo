module.exports = {
  entry: {
    app: './asset/app'
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'html!markdown'
      },
      {
        test: /\.less$/,
        loader: 'style!css?module&localIdentName=[local]_[hash:base64:10]!less'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, loader: 'babel'
      }
    ]
  }
}