System.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': 'lib/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'lib/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app start script
        'core': '../js/core.js',
        'router': '../js/router.js',
        'requester': '../js/requester.js',
        'data': '../js/data.js'
    }
});