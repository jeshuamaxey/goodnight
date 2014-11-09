'use strict';

angular.module('goodnightApp')
  .controller('TimelineCtrl', function ($scope, Quest, Auth) {
    $scope.user = Auth.getCurrentUser()
    $scope.drinks = Quest.query({user: $scope.user._id});
    console.log($scope.drinks)
  });
