'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, User) {
    $scope.user = User.get();

    console.log($scope.user)

    $scope.activeQuest = true;
  });