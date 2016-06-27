/**
 * Created by menghy on 16/6/17.
 */
angular.module('exampleApp.Filters',[]).filter('dayName',function(){
    var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return function (input) {
        return angular.isNumber(input)?dayNames[input]:input;
    }
});