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
                // https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mochi+ | Watch Movies and TV Shows', // <title><%= htmlWebpackPlugin.options.title %></title>
            filename: "index.html",
            template: "src/template.html" // Boiler-plate index for development in src
        }),
        new HtmlWebpackPlugin({
            title: 'Movie-Details', // <title><%= htmlWebpackPlugin.options.title %></title>
            filename: "movie-details.html",
            template: "src/links/movie-details.html" // Boiler-plate index for development in src
        }),
        new HtmlWebpackPlugin({
            title: 'Search', // <title><%= htmlWebpackPlugin.options.title %></title>
            filename: "search.html",
            template: "src/links/search.html" // Boiler-plate index for development in src
        }),
        new HtmlWebpackPlugin({
            title: 'Shows', // <title><%= htmlWebpackPlugin.options.title %></title>
            filename: "shows.html",
            template: "src/links/shows.html" // Boiler-plate index for development in src
        }),
        new HtmlWebpackPlugin({
            title: 'TV-Details', // <title><%= htmlWebpackPlugin.options.title %></title>
            filename: "tv-details.html",
            template: "src/links/tv-details.html" // Boiler-plate index for development in src
        }),
    ],
}

