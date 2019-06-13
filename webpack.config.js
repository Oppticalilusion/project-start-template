// Kevan Rayner 2019	
//
// Uses Babel to pull all scripts together in a temp file
// Webpack loads converted files for accessability

var path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js" 
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}