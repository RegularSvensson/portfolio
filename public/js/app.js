define(["angular","angular-route","js/controller/home-controller","js/controller/about-controller"],function(e){"use strict";e.module("ng-boilerplate",["ngRoute","ng-boilerplate.home-controller"]).config(["$routeProvider","$sceProvider","$locationProvider",function(e,o,l){e.when("/",{controller:"HomeController",templateUrl:"public/template/home.html"}).when("/about",{controller:"AboutController",templateUrl:"public/template/about.html"}).otherwise({redirectTo:"/"}),o.enabled(!1)}])});