class Router {
    constructor() {
        this._routes = [];
    }

    on(matchUrl, callback) {
        this._routes.push({
            matchUrl,
            callback
        })
        return this;
    }

    navigate() {
        const currentUrlHash = location.hash.slice(1);
        for (const {
                matchUrl,
                callback
            } of this._routes) {
            const parameters = Router.match(currentUrlHash, matchUrl);
            if (parameters) {
                callback(parameters);
                break;
            }
        }
    }

    static match(currentUrlHash, matchUrlHash) {
        var currentParameters = currentUrlHash.split(/\//g).clean();
        var matchParameters = matchUrlHash.split(/\//g).clean();
        if (currentParameters.length !== matchParameters.length) {
            return false;
        }
        const parameters = {};
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

        return parameters;
    }

    start() {
        $(document).ready(() => this.navigate());
        $(window).on("hashchange", () => this.navigate());
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
    // router init
    const router = new Router();

    // router setup
    router.on("/", function () {
        $("#content").load("../views/home.html");
    })
    router.on("/home", function () {
        $("#content").load("../views/home.html");
    })
    router.on("/signin", function () {
        $("#content").load("../views/signin.html");
    })
    router.on("/signup", function () {
        $("#content").load("../views/signup.html");
    })
    router.on("/character", function () {
        $("#content").load("../views/character.html");
    })
    router.on("/game", function () {
        $("#content").load("../views/game.html");
    })
    router.on("/test/:username", function (parameters) { // parameters test
        $("#content").html(parameters.username);
    })

    // router start
    router.start();
}

export {
    startRouter
};