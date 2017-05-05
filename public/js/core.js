import {
    Router
} from 'router';
import {
    homeController
} from 'homeController';
import {
    characterController
} from 'characterController';
import {
    gameController
} from 'gameController';

// router init
const router = new Router();

// router setup
router
    .on("/", () => homeController)
    .on("/home", () => homeController)
    .on("/signin", () =>
        $("#content").load("../views/signin.html"))
    .on("/signup", () =>
        $("#content").load("../views/signup.html"))
    .on("/character", () => characterController)
    .on("/game", () => gameController)
    .on("/test/:username", (parameters) => // parameters test
        $("#content").html(parameters.username))

// router start
router.start();