'use strict';

angular.module('goodnightApp')
  .controller('QuestsCtrl', function ($scope, $routeParams, Quest, User) {
    $scope.message = 'Hello';

    $scope.questId = $routeParams.questId;
    $scope.singleQuestView = ($scope.questId && $scope.questId.length ? true : false);

    console.log($scope.singleQuestView, $scope.questId);

    if($scope.singleQuestView) singleQuest();
    else allQuests();

    function singleQuest() {
      $('body').addClass('scroll-lock');
      $scope.quest = Quest.get({questId: $scope.questId});
    }

    function allQuests() {
      $('body').removeClass('scroll-lock');
      $scope.quests = Quest.query({});
    }

    // var quest = {
    //   _id: 'the_id_string',
    //   startTime: '',
    //   endTime: '',
    //   unitsConsumed: 1.0,
    //   places: [],
    //   moneySpent: 10.00,
    //   pace: 1.0,
    //   purchases: [{
    //     _id: '',
    //     userID: '',
    //     time: '',
    //     drink: {
    //       name: ,
    //       units: ,
    //       price: ,
    //       place: {
    //         _id: '',
    //         name: ''
    //       }
    //     }
    //   }],
    //   rating: 4
    // }
  });