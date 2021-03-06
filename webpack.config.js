const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = ({ mode } = { mode: 'production' }) => {
	// console.log(mode);
	return {
		mode,
		output: {
			filename: 'bundle.js',
			hotUpdateChunkFilename: 'hot/hot-update.js',
			hotUpdateMainFilename: 'hot/hot-update.json'
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Pomocode',
				template: 'src/index.html'
			}),
			new webpack.ProgressPlugin()
		],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env']
						}
					}
				},
				{
					test: /\.(jpg|png|svg)$/,
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx']
		}
	};
};
