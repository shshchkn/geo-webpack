module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|jpeg|png)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                },
                {
                    test: /\.svg$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/icons/[name].[ext]'
                    }
                }
            ]
        }
    };
};