const { webpackMerge, webpackConfig, tsOverlay } = require('just-scripts')

module.exports = webpackMerge(webpackConfig(), tsOverlay(), {
    mode: 'production'
})