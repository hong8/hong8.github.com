app.controller('MainCtrl', [ '$scope','$routeParams', function( $scope, $routeParams )
{
    $scope.title = 'Hong8\'s homepage.';
}]);

app.controller('MyCtrl', [ '$scope','$routeParams', function( $scope, $routeParams )
{
    $scope.title = 'My portfolio.';
}]);

app.controller('AboutCtrl', [ '$scope','$routeParams', function( $scope, $routeParams )
{
    $scope.title = 'About me.';
}]);