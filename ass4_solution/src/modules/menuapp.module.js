(function () {
'use strict';

angular.module('MenuApp', ['ui.router', 'data']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
}

})();
