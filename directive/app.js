/**
 * Created by menghy on 2016/4/13.
 */
var app=angular.module('app',[]);
app.directive('hello',function(){
    return {
        restrict:'A',
        link:function(){
            alert('我是属性');
        }
        // replace:true,
        // template:'<div>Hello AngularJs</div>'
    }
});
app.directive('mhy',function(){
    return {
        restrict:'C',
        link:function(){
            alert('我是Class');
        }
        // replace:true,
        // template:'<div>Hello AngularJs</div>'
    }
});