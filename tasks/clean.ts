import { cleanTask } from 'just-scripts'
import { join } from 'path'

export const clean = cleanTask({
    paths: ['dist', 'lib-es2015'].map(dir => join(process.cwd(), dir))
})