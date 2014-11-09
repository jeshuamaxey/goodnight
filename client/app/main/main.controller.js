'use strict';

angular.module('goodnightApp')
  .controller('MainCtrl', function ($scope, $http, User, Auth) {
    // 
    var user = User.get()
    console.log(user);
    console.log($scope.user)
  });
