/**
 * Created by menghy on 2016/4/12.
 */

var login = angular.module('login',[]);
login.controller('loginCtrl',['$scope',function($scope){
    $scope.user={name:'',pwd:''};
    $scope.errorMsg = '';
    $scope.login = function(){
        if($scope.user.name=='admin' && $scope.user.pwd=='123'){
            alert('登录成功!');
            $scope.errorMsg='';
        }else{
            $scope.errorMsg='用户名或密码错误!'
        }
    }
}]);



