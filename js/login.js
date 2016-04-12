/**
 * Created by menghy on 2016/4/12.
 */

var login = angular.module('login',[]);
login.controller('loginCtrl',['$scope',function($scope){
    $scope.user={name:'',pwd:''};
    $scope.login = function(){
        console.log($scope.user);
    }
}]);



