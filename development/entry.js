import routing from "./components/routing/routing";

import MainController from "./components/main-controller/main-controller";

require("angular-ui-router");

let todoApp = angular.module("Portfolio", ["ui.router"])
    .config(routing)
    .controller("MainController", [MainController])
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

export default todoApp;