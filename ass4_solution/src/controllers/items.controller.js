(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'categories' is injected into the controller due to the resolve in routes.js
ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsController = this;
  itemsController.items = items;
};


})();
