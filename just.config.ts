import { task, logger, series, webpackTask } from 'just-scripts';

import { clean } from './tasks/clean'
import { ts } from './tasks/ts'

task('clean', clean)

task('webpack', webpackTask())

task('less', webpackTask({ config: 'webpack.less.ts' }))

task('ts:esm', ts.esm)

task('compile', series(
    'clean',
    'less',
    'ts:esm'
))

task('build', series('webpack'));