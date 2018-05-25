const Builder = require('systemjs-builder');

async function build() {
    const builder = new Builder('./src', './system.config.js');

    await builder.bundle('[module1/x]', './dist/module1/x.js',
        {
            minify: false,
            mangle: false
        });

    builder.bundle('[module1/y]', './dist/module1/y.js',
        {
            minify: false,
            mangle: false
        });

    builder.bundle('[module2/x]', './dist/module2/x.js',
        {
            minify: false,
            mangle: false
        });

    builder.bundle('[module2/y]', './dist/module2/y.js',
        {
            minify: false,
            mangle: false
        });
}

build();
console.log('done')