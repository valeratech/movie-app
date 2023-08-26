const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  // common JS syntax - config(object)
    mode: 'development',
    entry: {  // can set multiple entry points by creating an object
        bundle: path.resolve(__dirname, 'src/index.js'),  // source directory/file
        // example: path.resolve(__dirname, 'src/another-file.js') - example using multiple entries
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // target directory/file
        filename: "[name][contenthash].js",  // output created file
        clean: true, // clean keeps track and only outputs new generated files and removes old files
        assetModuleFilename: "[name][ext]"
    },
    devtool: 'source-map', // Source maps provide a map to or from your dist or production code to your source code
    devServer: { //dev server provides you a port number where you can see or test your project in the browser locally.
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress:  true,
        historyApiFallback: true,
    },
    module: {  // module object
        rules: [  // rules array for each file type (ex. css)
            { // add a test value as a regular expression (any files that end with this extension .css)
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // apply loaders
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: "index.html",
            template: "src/template.html" // Boiler-plate index for development in src
        }),
    ],
}
