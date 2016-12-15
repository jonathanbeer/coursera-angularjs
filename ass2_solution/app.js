(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list = this;

    list.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    list.buyItem = function (itemIdx) {
      ShoppingListCheckOffService.buyItem(itemIdx);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;

    list.itemsBought = ShoppingListCheckOffService.getItemsBought();

    list.buyItem = function (itemIdx) {
      ShoppingListCheckOffService.buyItem(itemIdx);
    };
  };


  function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Cheesecake",
        quantity: "5"
      }
    ];
    var itemsBought = [];

    service.buyItem = function(itemIdx) {
      itemsBought.push(itemsToBuy[itemIdx]);
      itemsToBuy.splice(itemIdx, 1);
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

  }

// function ShoppingListFactory() {
//   var factory = function () {
//     var shoppingList = new ShoppingListService();
//     return shoppingList;
//   };
//
// };

})();
