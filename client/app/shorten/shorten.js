angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.message = '';
  $scope.signout = function() {
    Auth.signout();
  };
  $scope.addLink = function (link) {
    Links.addOne(link);
    $scope.message = 'successfully submitted';
  };
});