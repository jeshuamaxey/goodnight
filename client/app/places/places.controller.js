'use strict';

angular.module('goodnightApp')
  .controller('PlacesCtrl', function ($scope, $routeParams, Place, Drink, User) {
    // IRL this would be done on a per place basis
    $scope.drinks = Drink.query({});

    $scope.placeId = $routeParams.placeId;
    $scope.singlePlaceView = ($scope.placeId && $scope.placeId.length ? true : false);

    if($scope.singlePlaceView) singlePlace();
    else allPlaces();

    function singlePlace() {
      $('body').addClass('scroll-lock');
      $scope.place = Place.get({placeId: $scope.placeId});
    }

    function allPlaces() {
      $('body').removeClass('scroll-lock');
      $scope.places = Place.query({});
    }

  });
