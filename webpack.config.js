module.exports = {
    entry: {
        main: './src/main.js',
        worker: './src/worker.js'
    },
    output: {
        chunkFilename: '[id].js',
    }
}