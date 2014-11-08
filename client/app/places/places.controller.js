'use strict';

angular.module('goodnightApp')
  .controller('PlacesCtrl', function ($scope, $routeParams) {
    console.log($routeParams)

    $scope.placeId = $routeParams.placeId;
    $scope.singlePlaceView = ($scope.placeId && $scope.placeId.length ? true : false);

    console.log($scope.singlePlaceView, $scope.placeId);

    $scope.places = [{
      _id: '__test_id__',
      name: 'Wetherspoons',
      logo: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQ3OUgzphoVbox91t4Cf0N4S3F8m_CKUpdCS1Vq3_D_giDxhd2n7g'
    }];
  });
