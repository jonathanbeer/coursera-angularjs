(function() {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {

  var $service = this;
  $service.user = null;

  $service.setUser = function(user) {
    $service.user = user;
  }

  $service.getUser = function() {
    console.log("Returning user:", $service.user);
    return $service.user;
  }
}



})();
