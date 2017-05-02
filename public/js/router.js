class Router {
    constructor() {
        this.currentUrlHash;
        this.matchUrlHash;
        this.parameters = {};
    }

    match(currentUrlHash, matchUrlHash, callback) {
        var currentParameters = currentUrlHash.split(/\//g).clean();
        var matchParameters = matchUrlHash.split(/\//g).clean();
        console.log(currentParameters);
        console.log(matchParameters);
        if (currentParameters.length !== matchParameters.length) {
            console.log("diff length");
            return false;
        }

        const parametersCount = currentParameters.length;
        for (let i = 0; i < parametersCount; i++) {
            let firstSymbol = matchParameters[i][0];
            if (firstSymbol === ':') {
                const parameterName = matchParameters[i].slice(1);
                parameters[parameterName] = currentParameters[i];
            } else {
                if (currentParameters[i] !== matchParameters[i]) {
                    return false;
                }
            }
        }
        //return function (parameters) {};
        callback();
    }
}

Array.prototype.clean = function () {
    for (var i = 0; i < this.length; i++) {
        if (this[i].length < 1) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function startRouter() {
    console.log("Started router!");
    $(window).on("hashchange", function (event) {
        var router = new Router();
        const postHashParameters = location.hash.slice(1);
        //console.log(postHashParameters);

        router.match(postHashParameters, "/home", function (parameters) {
            $("#content").load("../views/signin.html");
            console.log("works1");
        });

    });
}

export {
    startRouter
};