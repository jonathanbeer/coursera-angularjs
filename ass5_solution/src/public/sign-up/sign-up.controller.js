( function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ApiPath', 'MenuService', 'UserService'];
function SignUpController(ApiPath, MenuService, UserService) {

  var $ctrl = this;
  $ctrl.error = false;
  $ctrl.complete = false;

  $ctrl.submit = function() {
    console.log("signUpCtrl.signup")
    MenuService.getFavoriteDish($ctrl.user.favorite_dish)
      .then(function(response) {
        $ctrl.error = false;
        $ctrl.complete = true;
        $ctrl.user.fav_dish = response;
        UserService.setUser($ctrl.user);
        return response;
      })
      .catch(function(error) {
        $ctrl.error = true;
        $ctrl.complete = false;
      });
  }


}

})();
