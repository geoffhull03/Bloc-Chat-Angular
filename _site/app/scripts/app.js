(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('setUser', {
                url: '/setUser',
                controller: 'SetUserCtrl as setUser',
                templateUrl: '/templates/setUser.html'
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ngCookies'])
        .config(config);
})();

