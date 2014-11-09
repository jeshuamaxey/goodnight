'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, $http, Auth, User) {
    // 
    var currentUser = Auth.getCurrentUser();

    console.log(User.get(function(user) {
      var quest = user.quest;
      console.log(quest);
      $scope.pace = ((1.0*quest.unitsConsumed) / ((quest.end - quest.start) + (60*60*1000))) * (60*60*1000);
      $scope.pace = $scope.pace.toFixed(2);

      $scope.timeElapsed = ((quest.end - quest.start)/(1000*60)).toFixed(1);

    }))

    $scope.activeQuest = true;
    if (Auth.getCurrentUser() != 'undefined') {
        if(currentUser && currentUser.summary) {
          $scope.moneySpent = currentUser.summary.moneySpent.toFixed(2);
        }
    	$scope.loggedIn = true;
        if(currentUser && currentUser.summary) {
          $scope.unitsConsumed = currentUser.summary.unitsConsumed.toFixed(2);
        }
    } else {
    	$scope.loggedIn = false;
    }
  });
