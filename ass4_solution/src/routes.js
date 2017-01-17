(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categoryList', {
    url: '/categories',
    templateUrl: 'src/templates/category-list.template.html',
    controller: 'CategoriesController as categoriesController',
    resolve: {
      menuCategories: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categoryDetails', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/templates/items-list.template.html',
    controller: 'ItemsController as itemsController',
    resolve: {
       items: ['$stateParams', 'MenuDataService',
         function ($stateParams, MenuDataService) {
           return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
         }]
    }
  })

}

})();
