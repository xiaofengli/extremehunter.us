var config = {
   entry: './src/main.js',
   output: {
      path: __dirname+"/dist/js",
      filename: 'index.js'
   },
   devServer: {
      inline: true,
      port: 8081
   },
   module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
         }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
module.exports = config;