const { webpackMerge, webpackConfig, tsOverlay, stylesOverlay } = require('just-scripts')

const config = webpackMerge(
    webpackConfig(),
    stylesOverlay(),
    {
        mode: 'production',
        output: {
            library: 'MondayUI',
            libraryTarget: 'umd'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    strictMath: true,
                                },
                            },
                        },
                    ],
                },
            ]
        }
    })

module.exports = config