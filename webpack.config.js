var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
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
      }
    ]
  }
}
module.exports = config;