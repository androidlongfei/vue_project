// http://eslint.org/docs/user-guide/configuring

// 当前操作系统 [Windows_NT,linux,Darwin]
const currentOsType = require('os').type()

// console.log('os type', currentOsType);

// const linebreakStyle = currentOsType === 'Windows_NT' ? [0, "windows"] : [2, "unix"]

// console.log('linebreakStyle', linebreakStyle)

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    //https://github.com/airbnb/javascript
    // extends: 'airbnb-base',
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": [
            0, "tab"
        ],
        "linebreak-style": currentOsType === 'Windows_NT' ? [0, "windows"] : [2, "unix"],
        // 字符串使用单引号
        "quotes": [
            2, "single"
        ],
        "semi": [0, "always"],
        "no-inline-comments": 0,
        // 定义了但没使用的变量，警告
        "no-unused-vars": [1, {
            "vars": "all",
            "args": "none"
        }],
        // 使用 === 代替 ==,警告
        "eqeqeq": [1, "always"],
        // 最有只能有两个空行
        "no-multiple-empty-lines": [2, {
            "max": 3,
            "maxBOF": 1
        }],
        // 函数名后面空格,忽略
        "space-before-function-paren": 0
    }
}
