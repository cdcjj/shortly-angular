angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.addLink = function () {
    if (Auth.isAuth()) {
      Links.addOne();
    } else {
      $location.path('/signin');
    }
  };
});
