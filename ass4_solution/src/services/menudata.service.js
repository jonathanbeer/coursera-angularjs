(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q', '$timeout']
function MenuDataService($http, $q, $timeout) {
  var service = this;
  var categories = [];

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ' https://davids-restaurant.herokuapp.com/categories.json'
    });

    return response.then( function(content) {
      return content.data;
    }).catch(function(error) {
      console.log("Error:", error);
    })
  };

  service.getItemsForCategory = function(categoryShortName) {
    var url_base = 'https://davids-restaurant.herokuapp.com/menu_items.json';
    var response = $http({
      method: "GET",
      url: url_base,
      params: {
        category: categoryShortName
      }

    });

    return response.then( function(content) {
      console.log(content.data);
      return content.data;
    }).catch(function(error) {
      console.log("Error:", error);
    })
  };


}

})();
