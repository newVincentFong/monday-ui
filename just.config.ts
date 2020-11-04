import { task, logger, series, webpackTask } from 'just-scripts';

import { clean } from './tasks/clean'
import { ts } from './tasks/ts'
import { lessTask } from './tasks/less'

task('clean', clean)

task('webpack', webpackTask())

// task('less', webpackTask({ config: 'webpack.less.ts' }))

task('less', lessTask({ output: 'lib-es2015' }))

task('ts:esm', ts.esm)

task('compile', series(
    'clean',
    'ts:esm',
    'less',
))

task('build', series('webpack'));