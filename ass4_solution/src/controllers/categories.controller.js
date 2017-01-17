(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

//CategoriesController.$inject = ['MenuDataService'];
//function CategoriesController(MenuDataService) {

// 'categories' is injected into the controller due to the resolve in routes.js
CategoriesController.$inject = ['menuCategories'];
function CategoriesController(menuCategories) {
  var categoriesController = this;
  categoriesController.menuCategories = menuCategories;
  console.log("cc.menuCategories:", categoriesController.menuCategories);

  //
  // Not needed because we 'resolve' in the routes.js
  //
  // categoriesController.categories = MenuDataService.getAllCategories();
  // categoriesController.$onInit = function () {
  // console.log("HERE I AM")
  // MenuDataService.getAllCategories()
  // .then(function (result) {
  //   categoriesController.categories = result;
  // });
};


})();
