//(function() {
angular.module("ui", ["ngRoute"])
.config(['$routeProvider', function($routeProvider) {
      	return $routeProvider.when('/', {
        	templateUrl: 'index.html',
//      	controller: 'uii'
      	}).when('/register', {
        	templateUrl: '/app/register/index.html',
        	controller: 'RegisterCtrl'
      	}).when('/a', {
        	templateUrl: '/app/index/index.html',
        	controller: 'IndexCtrl'
     	 }).otherwise({redirectTo:'/'});
    }
   	]);
//]).run([
//  '$location', '$http', '$route', function($location, $http, $route) {
//    var token;
//    token = localStorage.getItem('x-token');
//    if (token) {
//      return $http.post(Tms.apiAddress + "/api/user/autologin", {
//        token: token
//      }).then(function(res) {
//        if (res.data === true) {
//          $http.defaults.headers.common['x-token'] = token;
//          localStorage.setItem('x-token', token);
//          return $route.reload();
//        } else {
//          return $location.path('/login').replace();
//        }
//      }, function() {
//        return $location.path('/login').replace();
//      });
//    } else {
//      return $location.path('/login').replace();
//    }
//  }
//]);

//}).call(this);
