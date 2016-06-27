/**
 * Created by menghy on 16/6/24.
 */
var app = angular.module('myApp',[]);
app.value('dataVal','Hello,Mhy');
app.controller('firstChildCtrl',function($scope,dataVal){
    $scope.dataValue=dataVal;
    $scope.reverseText=function(){
        $scope.dataValue=$scope.dataValue.split("").reverse().join("");
    }
});
app.controller('secondChildCtrl',function($scope){
    $scope.dataValue="Hello,Mzy";
    $scope.changeCase=function(){
        $scope.dataValue=$scope.dataValue.toUpperCase();
    }
});