'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, $http, Auth, User, $interval) {
    // 
    var currentUser = Auth.getCurrentUser();

    User.get(function(user) {
      var quest = user.quest;
      if(quest) {
          $scope.activeQuest = quest.active;


        $scope.pace = ((1.0*quest.unitsConsumed) / ((Date.now() - quest.start) + (60*60*1000))) * (60*60*1000);
        $scope.pace = $scope.pace.toFixed(2);

        $interval(function() {
          $scope.pace = ((1.0*quest.unitsConsumed) / ((Date.now() - quest.start) + (60*60*1000))) * (60*60*1000);
          $scope.pace = $scope.pace.toFixed(2);
        }, 5*1000);

        $scope.timeElapsed = ((Date.now() - quest.start)/(1000*60)).toFixed(0);

    }

    })
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
