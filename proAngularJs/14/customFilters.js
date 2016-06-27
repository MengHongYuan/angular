/**
 * Created by menghy on 16/6/24.
 */
angular.module('myApp')
.filter('labelCase',function(){
    return function(value,reverse){
        if(angular.isString(value)){
            var intermediate=reverse?value.toUpperCase():value.toLowerCase();
            return (reverse?intermediate[0].toLowerCase():intermediate[0].toUpperCase())+intermediate.substr(1);
        }else{
            return value;
        }
    }
})
.filter('skip',function(){
    return function(data,count){
        if(angular.isArray(data)&&angular.isNumber(count)){
            if(count>data.length||count<1){
                return data;
            }else{
                return data.slice(count);
            }
        }else{
            return data;
        }
    }
})
.filter('take',function($filter){
    return function (data,skipCount,takeCount) {
        var skipCount=$filter('skip')(data,skipCount);
        return $filter('limitTo')(skipCount,takeCount);
    }
});