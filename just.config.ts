import { task, logger, series, webpackTask } from 'just-scripts';

task('webpack', webpackTask())

task('compile', webpackTask({ config: 'webpack.compile.ts' }))

task('build', series('webpack'));