System.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'lib/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'lib/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app start script
        'core': '../js/core.js',
        'router': '../js/router.js',
        'requester': '../js/requester.js'
    }
});