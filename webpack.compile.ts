import { Configuration, Entry, RuleSetUse } from 'webpack'
import { webpackMerge, tsOverlay } from 'just-scripts'
import fs from 'fs'
import path from 'path'

function getComponentEntrys(): Entry {
    const entry = {}
    fs.readdirSync(path.join(process.cwd(), 'src', 'components')).map(componentName => {
        entry[componentName] = `./src/components/${componentName}/index.tsx`
    })
    return entry
}

const baseConfig: Configuration = {
    mode: 'none',
    entry: getComponentEntrys(),
    output: {
        filename: '[name].tsx',
        path: __dirname + '/lib-es2015',
        library: '[name]',
        libraryTarget: 'var'
    },
    externals: {
        react: 'react'
    }
}

const lessUse: RuleSetUse = [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'less-loader', options: {
        lessOptions: { strictMath: true },
    }}
]

module.exports = webpackMerge(
    baseConfig,
    tsOverlay(),
    {
        module: { rules: [{ test: /\.less$/, use: lessUse }] }
    } as Configuration
)