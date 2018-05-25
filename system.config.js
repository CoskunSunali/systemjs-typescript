(function (global) {
    System.config({
        warnings: true,
        baseURL: './src',
        transpiler: 'plugin-typescript',
        typescriptOptions: {
            tsconfig: '/tsconfig.json'
        },
        paths: {
            'npm:': './node_modules/'
        },
        map: {
            'plugin-typescript': 'npm:plugin-typescript/lib/plugin.js',
            'typescript': 'npm:typescript'
        },
        packages: {
            typescript: {
                main: 'lib/typescript.js',
                meta: {
                    'lib/typescript.js': {
                        'exports': 'ts'
                    }
                }
            },
            module1: {
                defaultExtension: 'js'
            },
            module2: {
                defaultExtension: 'ts'
            }
        }
    });
})(this);