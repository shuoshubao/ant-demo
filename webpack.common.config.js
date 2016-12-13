const fs = require('fs')
const fileList = []
const entry = {}
const getFileList = path => {
  var dirList = fs.readdirSync(path)
  dirList.forEach(v => {
    if(v.startsWith('.')) {
      return
    }
    if (fs.statSync(path + '/' + v).isDirectory()) {
      getFileList(path + '/' + v)
    } else {
      fileList.push(path + '/' + v)
    }
  })
}

getFileList('asset')
fileList.forEach(v => {
  entry[`${v.split('/')[1].slice(0, -3)}`] = `./asset/${v.split('/')[1]}`
})

module.exports = {
  entry,
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