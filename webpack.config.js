const
	path 			  = require('path'),
	isProd			= process.env.NODE_ENV === 'production',
	compileMode = isProd ? 'production' : 'development',
	entry				= './src/App/App.js',
	outputPath 	= path.resolve(__dirname, './dist'),
	outputFName = isProd ? '[name].[contenthash].js' : 'bundle.js',
	stylesFName = isProd ? '[name].[contenthash].css' : 'styles.css',
	{
		CleanWebpackPlugin
	} = require('clean-webpack-plugin'),
	HtmlWebpackPlugin	= require('html-webpack-plugin'),
	appVersion = require('./package.json').version;

// Plugins
const listOfPlugins = [];
let
	publicPath			= '',
	devServer				= {},
	defaultStylesProcessor = 'style-loader';

// Production Or Development Specific Plugins
if (isProd) {
	publicPath = '';
	const
		MiniCssExtractPlugin = require('mini-css-extract-plugin'),
		TerserPlugin = require('terser-webpack-plugin');
	defaultStylesProcessor = MiniCssExtractPlugin.loader;
	listOfPlugins.push(new MiniCssExtractPlugin({filename: stylesFName}));
	listOfPlugins.push(new TerserPlugin());
} else {
	devServer = {
		contentBase: path.join(__dirname, './dist'),
		hot: true,
		port: 8046,
		writeToDisk: true
	}
}

// Non-Env Dependent Plugins
listOfPlugins.push(new CleanWebpackPlugin());
listOfPlugins.push(new HtmlWebpackPlugin({
	'application-name': 'The GemTrove',
	'application-version': appVersion,
	author: 'Dustin K Greco',
	description: 'Dustin K Greco - The GemTrove Portfolio Personal Website',
	favicon: 'favicon.ico',
	generator: 'NodeJS,Express,ReactJS',
	keywords: 'The GemTrove, Dustin K Greco, Greco Portfolio, MERN Stack Developer',
	template: 'theGemTrove.ejs',
	title: 'The GemTrove'
}));

module.exports = {
	devServer,
	devtool: isProd ? 'hidden-nosources-source-map' : 'cheap-source-map',
	entry,
	output: {
		filename: outputFName,
		path: outputPath,
		publicPath
	},
	mode: compileMode,
	module: {
		rules: [
			{
				test: /\.(ttf)$/,
				type: 'asset/resource'
			},
			{
				test: /\.s?css$/,
				use: [
					defaultStylesProcessor, 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env', '@babel/react' ],
						plugins: [ '@babel/plugin-proposal-class-properties' ]
					}
				}
			}
		]
	},
	plugins: listOfPlugins
}