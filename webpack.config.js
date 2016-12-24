var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? 'source-map' : null,
	entry: [
		'./src/js/client.js'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		path: './build/js',
		filename: 'client.min.js'
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	],
	babel: {
		presets: ['react', 'es2015', 'stage-0'],
		plugins: [
			'react-html-attrs',
			'transform-decorators-legacy',
			'transform-class-properties'
		]
	},
	devServer: {
		contentBase: './build/',
		inline: true,
		port: 3000,
		historyApiFallback: true,
		colors: true,
		progress: true
	}
};
