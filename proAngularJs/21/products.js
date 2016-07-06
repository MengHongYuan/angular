/**
 * Created by menghy on 16/7/4.
 */


angular.module('myApp',['increment','ngRoute'])
    .constant('baseUrl','product.json')
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/angular/proAngularJs/21/list',{
            templateUrl:'tableView.html'
        });
        $routeProvider.when('/angular/proAngularJs/21/edit',{
            templateUrl:'editorView.html'
        });
        $routeProvider.when('/angular/proAngularJs/21/create',{
            templateUrl:'editorView.html'
        });
        $routeProvider.otherwise({
            templateUrl:'tableView.html'
        });
    })
    .controller('defaultCtrl',function ($scope,$http,$location,baseUrl) {
    $scope.currentProduct=null;

    $scope.listProducts=function () {
        $http.get(baseUrl).success(function (data) {
            $scope.products=data;
        });
    };
    $scope.deleteProduct=function(product){
        $scope.products.splice($scope.products.indexOf(product),1);
        $location.path('/angular/proAngularJs/21/list');
    };
    $scope.createProduct=function (product) {
        $scope.products.push(product);
        $location.path('/list')
    };
    $scope.updateProduct=function (product) {
        for(var i=0;i<$scope.products.length;i++){
            if ($scope.products[i].id==product.id){
                $scope.products[i]=product;
                break;
            }
        }
        $location.path('/angular/proAngularJs/21/list');
    };
    $scope.editProduct=function (product) {
        $scope.currentProduct=product;
        $location.path('/angular/proAngularJs/21/edit');
    };
    $scope.saveEdit=function (product) {
        if(angular.isDefined(product.id)){
            $scope.updateProduct(product);
        }else {
            $scope.createProduct(product);
        }
        $scope.currentProduct={};
    };
    $scope.cancelEdit=function () {
        $scope.currentProduct={};
        $location.path('/angular/proAngularJs/21/list');
    };
    $scope.listProducts();
});