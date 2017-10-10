const path = require('path');
const webpack = require('webpack');
const HTML = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./modules/pug');
const devserver = require('./modules/devserver');
const sass = require('./modules/sass');
const css = require('./modules/css');
const extractCSS = require('./modules/css.extract');
const uglifyJS = require('./modules/js.uglify');
const images = require('./modules/images');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge(
    {
        entry: {
            'index': PATHS.src + '/pages/index/index.js'
        },
        output: {
          path: PATHS.build,
          filename: 'js/[name].js'
        },
        plugins: [
            new HTML({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.src + '/pages/index/index.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            })
        ]
    },
    pug(),
    images()
);

module.exports = (env) => {
    if (env === 'production') {
        return merge(
            [
                common,
                extractCSS(),
                uglifyJS()
            ]
        );
    }
    if (env === 'development') {
        return merge(
            [
                common,
                devserver(),
                sass(),
                css()
            ]
        );
    }
};