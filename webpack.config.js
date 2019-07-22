const path = require('path');
const webpack = require('webpack');
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
		title: "title",
		template: "./index.html",
		inject: true
	})],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.css$/, // 开发环境不提取css
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [{ // 图片文件小于8k时编译成dataUrl直接嵌入页面，超过8k回退使用file-loader
					loader: 'url-loader',
					options: {
						limit: 8192, // 8k
						name: 'img/[name].[ext]', // 回退使用file-loader时的名称
						fallback: 'file-loader', // 当超过8192byte时，会回退使用file-loader
					}
				}]
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
