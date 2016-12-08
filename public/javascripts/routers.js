angular.module('myApp', ['ui.router','ctrlModule'])
    .config(function ($locationProvider,$urlRouterProvider,$stateProvider) {
      $locationProvider
      .html5Mode({
        enabled: true, 
        requireBase: false
      });

      $urlRouterProvider
      .when('/','/test')
      .otherwise('/test')

      $stateProvider
      .state('test',{
        url:'/test',
        templateUrl:'views/test.html',
        controller:'testCtrl'
      })
    })
 