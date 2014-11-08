'use strict';

angular.module('goodnightApp')
  .controller('SessionsCtrl', function ($scopem, $routeParams) {
    $scope.message = 'Hello';


    $scope.sessionId = $routeParams.sessionId;
    $scope.singleSessionView = ($scope.sessionId && $scope.sessionId.length ? true : false);

    console.log($scope.singlePlaceView, $scope.placeId);

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
