import { tscTask } from 'just-scripts'

export const ts = {
    esm: () => tscTask({
        outDir: 'lib-es2015',
        rootDir: 'src/components/',
        module: 'esnext',
        pretty: true,
        target: 'es5'
    })
}