'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    // 
    var currentUser = Auth.getCurrentUser();

    $scope.activeQuest = true;
    if (Auth.getCurrentUser() != 'undefined') {
        $scope.moneySpent = currentUser && currentUser.summary && currentUser.summary.moneySpent.toFixed(2);
    	$scope.loggedIn = true;
        $scope.unitsConsumed = currentUser && currentUser.summary && currentUser.summary.unitsConsumed.toFixed(2);
    } else {
    	$scope.loggedIn = false;
    }
  });
