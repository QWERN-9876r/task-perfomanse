module.exports = {
    target: ['web', 'es2022'],
    entry: {
        main: './src/main.js',
        worker: './src/worker.js'
    },
    output: {
        chunkFilename: '[id].js',
    }
}