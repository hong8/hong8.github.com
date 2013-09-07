//'use strict';

app = angular.module('hong8app', []);
// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
app.config([ '$routeProvider', function ( $routeProvider )
{
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        }).
        when('/my', {
            templateUrl: 'partials/my.html',
            controller: 'MyCtrl'
        }).
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        }).
        otherwise({
            redirectTo: 'main'
        });
}]);