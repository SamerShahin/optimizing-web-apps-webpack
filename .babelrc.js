module.exports = {
    presets: [
        ['@babel/preset-env', {
            debug: false,
            modules: false,
            targets: {
                browsers: ['last 2 versions']
            },
            useBuiltIns: 'usage'
        }]
    ]
};
