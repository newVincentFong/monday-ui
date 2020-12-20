import less from 'less'
import glob from 'glob'
import path from 'path'
import fs from 'fs'
import { TaskFunction, logger } from 'just-scripts'
import parallelLimit from 'run-parallel-limit'

export interface LessTaskOptions {
    output: string
}

export function lessTask(options: LessTaskOptions): TaskFunction {
    return function lessTaskFunction(done: (err?: Error) => void) {
        const files = glob.sync(path.resolve(process.cwd(), 'src/**/*.less'))
        if (files.length) {
            logger.info(`detect ${files.length} less files`)
            const tasks = files.map(fileName => function(cb: any): void {
                fileName = path.resolve(fileName)
                const lessInput = fs.readFileSync(fileName, { encoding: 'utf8' })
                less.render(lessInput, {
                    paths: [path.dirname(fileName)]
                }).then(output => {
                    fs.writeFileSync(fileName.replace('src/components', options.output).replace('.less', '.css'), output.css)
                }).catch(err => console.error(err))
            })

            parallelLimit(tasks, 5, done)
        } else {
            logger.warn('detect no less files')
            done()
        }
    }
}