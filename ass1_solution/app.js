(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.lunchMessage = "";
  $scope.checkLunch = function() {
    var numItems = getNumItems($scope.lunch);
    var msg = getMessage(numItems);
    $scope.lunchMessage = msg;
    $scope.numItems = numItems;
  };

  var getNumItems = function(message)  {
    var numItems = 0;
    if (message.length == 0) {
      return 0;
    } else {
      return message.split(',').length;
    }
  };

  var getMessage = function(numItems) {
    var msg = "";
    if (numItems == 0) {
      msg = "Please enter data first";
    } else if (numItems > 0 && numItems <= 3) {
      msg = "Enjoy!";
    } else {
      msg = "Too much!";
    }
    return msg;
  };

};

})();
