module.exports = {
    target: ['web', 'es3'],
    entry: {
        main: './src/main.js',
        worker: './src/worker.js'
    },
    output: {
        chunkFilename: '[id].js',
    }
}