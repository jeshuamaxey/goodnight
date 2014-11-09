'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, $http, User, Auth) {
    // 
    var user = User.get();
    var currentUser = Auth.getCurrentUser();
    console.log(user);
    console.log($scope.user)

    $scope.activeQuest = true;
    if (Auth.getCurrentUser() != 'undefined') {
        $scope.moneySpent = Auth.getCurrentUser().summary.moneySpent.toFixed(2);
    	$scope.loggedIn = true;
        $scope.unitsConsumed = Auth.getCurrentUser().summary.unitsConsumed.toFixed(2);
    } else {
    	$scope.loggedIn = false;
    }
  });
