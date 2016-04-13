/**
 * Created by menghy on 2016/4/13.
 */
var register = angular.module('register',[]);
register.controller('UserCtrl',function($scope,$http){
    $scope.user = {
        icon:'icon.jpeg',
        showIcon:true,
        isShowIcon:true,
        name:'',
        pwd:'',
        job:'2',
        sex:'0',
        hobby:[1,2,3]
    };
    $scope.isChecked = function(n){
        var isOk = false;
        for(var i=0;i<$scope.user.hobby.length;i++){
            if(n==$scope.user.hobby[i]){
                isOk=true;
                break;
            }
        }
        return isOk;
    };
    $scope.register = function(user){
        console.log(user);
        $http.post('',user).success(function(resp){
            if(resp.success){
                alert('成功!');
            }
        })
    };
});