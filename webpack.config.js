const webpack = require('webpack')

module.exports = {
	context: `${__dirname}/client/src`,
	entry: './index.js',
	output: {
		path: `${__dirname}/client/build`,
    filename: 'client.js'
	},
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
	module: {
		loaders: [
			// babel-loader
			{
	      test: /(\.js|\.jsx)$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015', 'react'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
	      }
			},
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
			// sass-loader
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=assets/[name].[ext]' },
		]
	},
}
