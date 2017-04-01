import routing from "./components/routing/routing";

import MainCtrl from "./components/main/mainCtrl";
import MainService from "./components/main/mainService";
require("angular-ui-router");

let portfolio = angular.module("portfolio", ['ui.router', 'ngAnimate'])
    .config(["$stateProvider", "$urlRouterProvider", routing])

    .service("mainService", MainService)

    .controller("mainController", ["$location", "mainService", MainCtrl])

    .directive("mainPart", function () {
        return {
            restrict    : "AE",
            controller: "mainController",
            controllerAs: "main"
        }
    })
    .directive("frontEnd", function () {
        return {
            restrict    : "AE",
            template    : require("./components/front-end/front-end.html")
        }
    })
    .directive("resumeCv", function () {
        return {
            restrict    : "AE",
            template    : require("./components/resume-cv/resume-cv.html")
        }
    })
    .directive("computerGraphics", function () {
        return {
            restrict    : "AE",
            template    : require("./components/computer-graphics/computer-graphics.html")
        }
    });

export default portfolio;
