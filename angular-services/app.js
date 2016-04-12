/**
 * Created by menghy on 2016/4/12.
 */
var app=angular.module('app',[]);
app.value('realname','孟鸿远');
app.constant('http','www.baidu.com');
app.factory('Data',function(){
    return {
        msg:'你好啊',
        setMsg:function(){
            this.msg = '我不好';
        }
    }
});
app.service('user',function(){
    this.fristName='孟';
    this.lastName='鸿远';
    this.getName = function(){
        return this.fristName+this.lastName;
    }
});
app.controller('MyCtrl',function($scope,realname,http,Data,user){
    $scope.realname=realname;
    $scope.http = http;
    $scope.data = Data;
    $scope.data.setMsg();
    $scope.userName = user.getName();
});