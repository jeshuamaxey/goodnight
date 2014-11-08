'use strict';

angular.module('goodnightApp')
  .controller('ApiGuiCtrl', function ($scope, Quest) {
    $scope.saveNewQuest = function(quest) {
      console.log($scope.quest);

      Quest.save($scope.quest);
    }
  });
