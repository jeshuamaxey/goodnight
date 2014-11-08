'use strict';

angular.module('goodnightApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Start a session',
      'link': '/places',
      'hiddenBeforeLogin': true
    },
    {
      'title': 'Home',
      'link': '/',
      'hiddenBeforeLogin': false
    },
    {
      'title': 'Quests',
      'link': '/quests',
      'hiddenBeforeLogin': true
    },
    {
      'title': 'Stats',
      'link': '/stats',
      'hiddenBeforeLogin': true
    },
    {
      'title': 'Places',
      'link': '/places',
      'hiddenBeforeLogin': true
    },
    {
      'title': 'Drinks',
      'link': '/drinks',
      'hiddenBeforeLogin': true
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });