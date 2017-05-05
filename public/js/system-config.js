System.config({
    transpiler: 'plugin-babel',
    map: {
        // libs
        'plugin-babel': '../lib/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../lib/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app
        'core': '../js/core.js',
        'router': '../js/router.js',
        'requester': '../js/requester.js',
        'data': '../js/data.js',
        'templates': '../js/templates/core/templates.js',
        // controllers
        'homeController': '../js/controllers/homeController.js',
        'characterController': '../js/controllers/characterController.js',
        'gameController': '../js/controllers/gameController.js',
    }
});