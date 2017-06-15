angular.module('app', ['ui.router', 'ui.grid'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/', "")
        $stateProvider
            .state('home', {
                templateUrl: '../views/home.html',
                url: '/'
            })
            .state('hcp_home', {
                templateUrl: '../views/landing_page_hcp.html',
                url: '/hcp_home',
            })
            .state('user_home', {
                templateUrl: '../views/landing_page_user.html',
                url: '/user_home',
            })
            .state('global_search', {
                templateUrl: '../views/global_search_results.html',
                url: '/global_search',
            })
            .state('settings', {
                templateUrl: '../views/settings.html',
                url: '/settings',
            })
            .state('test_create', {
                templateUrl: '../views/test_create.html',
                url: '/test_create',
            })
            .state('test_manage', {
                templateUrl: '../views/test_manage.html',
                url: '/test_manage',
            })
            .state('user_create', {
                templateUrl: '../views/user_create.html',
                url: '/user_create',
                controller: 'userCreate'
            })
            .state('user_manage', {
                templateUrl: '../views/user_manage.html',
                url: '/user_manage',
                controller: 'userManage'
            })
    })