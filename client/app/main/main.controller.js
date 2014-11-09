'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, $http, User, Auth) {
    // 
    var user = User.get()
    console.log(user);
    console.log($scope.user)

    $scope.activeQuest = true;
    if (Auth.getCurrentUser() != 'undefined') {
    	$scope.loggedIn = true;
    } else {
    	$scope.loggedIn = false;
    }
  });
