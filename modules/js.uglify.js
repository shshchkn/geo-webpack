const uglifyJs = require('uglifyjs-webpack-plugin');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        plugins: [
            new uglifyJs()
        ]
    };
};