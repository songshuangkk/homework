var webpack = require("webpack");
var path = require("path");

module.exports = {
		entry: "",
		output: {},
		module: {
			loaders: [
				{test: /\.css$/, loader: "style!css"},
				{test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=react,presets[]=es2015'},
				{test: /\.json$/, loader: 'json'}
			]
		}
}
