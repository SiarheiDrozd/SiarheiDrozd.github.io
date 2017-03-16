export default function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise("/front-end");
    $stateProvider
        .state('resume-cv', {
            url: "/resume-cv",
            template: "<resume-cv></resume-cv>"
        })
        .state('todoList', {
            url: "/computer-graphics",
            template: "<computer-graphics></computer-graphics>"
        })
        .state('front-end', {
            url: "/front-end",
            template: "<front-end></front-end>"
        });
}
