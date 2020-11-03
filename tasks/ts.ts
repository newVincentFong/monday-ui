import { tscTask } from 'just-scripts'

export const ts = {
    esm: () => tscTask({
        outDir: 'lib',
        module: 'esnext',
        pretty: true,
        target: 'es5'
    })
}