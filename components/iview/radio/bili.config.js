const {join} = require('path');
const {author, license, name, version} = require('./package.json');
const cwd = __dirname;

console.log(`开始打包 component -> ${name}\n`);

module.exports = {
    plugins: {
        commonjs: true,
        postcss: {
            modules: {
                generateScopedName: '[local]'
            }
        }
    },
    banner: {
        author: `2018-${new Date().getFullYear()} ${author}\n * Github https://github.com/wangjing0630/caxa-form with ${name}`,
        license,
        name,
        version
    },
    output: {
        format: ['umd-min'],
        moduleName: 'FcRadio',
        fileName: 'index.js',
        extractCSS: false
    },
    
    input: join(cwd, '/src/index.js')
};
