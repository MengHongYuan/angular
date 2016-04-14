/**
 * Created by menghy on 2016/4/13.
 */
var app = angular.module('app',[]);

app.controller('AppCtrl',function($scope){
    $scope.loadMoreData = function(){
        alert('正在加载数据...');
    };
    $scope.delData = function(){
        alert('正在删除数据...');
    }
});

app.directive('enter',function(){
    return function(scope,element,attrs){
        element.bind('click',function(){
            scope.$apply(attrs.enter);
        });
    }
});