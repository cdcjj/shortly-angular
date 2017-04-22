angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  $scope.data = {};
  $scope.signout = function() {
    Auth.signout();
  };
  Links.getAll()
    .then(function (links) {
      $scope.data.links = links;
    });
});
