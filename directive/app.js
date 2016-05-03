/**
 * Created by menghy on 2016/4/13.
 */
var app=angular.module('app',[]);
app.directive('hello',function(){
    return {
        restrict:'A',
        replace:true,
        template:'<div>我是属性</div>',
        link:function(scope,element,attrs){
            element.bind('click',function(){
                alert('我是属性');
            });
        }
    }
});
app.directive('mhy',function(){
    return {
        restrict:'C',
        replace:true,
        template:'<div>{{myHtml}}</div>',
        link:function(scope,element,attrs){
            scope.myHtml='我是Class';
            element.bind('click',function(){
                alert(scope.myHtml);
            });
        }
    }
});