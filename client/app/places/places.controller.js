'use strict';

angular.module('goodnightApp')
  .controller('PlacesCtrl', function ($scope, $routeParams, Place, Drink) {

    // IRL this would be done on a per place basis
    // $scope.drinks = Drink.query({});

    // hack while db is out of action
    Drink.query({}).then(function(drinks) {
      $scope.drinks = drinks.data;
    });

    $scope.placeId = $routeParams.placeId;
    $scope.singlePlaceView = ($scope.placeId && $scope.placeId.length ? true : false);

    if($scope.singlePlaceView) singlePlace();
    else allPlaces();

    function singlePlace() {
      $scope.place = Place.get({placeId: $scope.placeId});
    }

    function allPlaces() {
      $scope.places = Place.query({});
    }

  });
