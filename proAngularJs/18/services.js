/**
 * Created by menghy on 16/6/30.
 */

/*var baseLogger = function(){
    this.messageCount=0;
    this.log=function(msg){
        console.log(this.msgType+":"+(this.messageCount)+" "+msg);
    }
};
var debugLogger=function(){};
debugLogger.prototype=new baseLogger();
debugLogger.prototype.msgType="Debug";

var errorLogger=function(){};
errorLogger.prototype=new baseLogger();
errorLogger.prototype.msgType='Error';

angular.module('customServices',[]).service('logService',debugLogger).service('errorService',errorLogger);*/


/*angular.module('customServices',[]).factory('logService',function(){
    var messageCount=0;
    return {
        log:function(msg){
            console.log('(LOG+'+messageCount++ +')'+msg);
        }
    }
});*/

angular.module('customService',[]).provider('logService',function(){
    var counter=true,debug=true;
    return {
        messageCounterEnabled:function(setting){
            if(angular.isDefined(setting)){
                counter=setting;
                return this;
            }else{
                return counter;
            }
        },
        debugEnabled:function(setting){
            if(angular.isDefined(setting)){
                debug=setting;
                return this;
            }else{
                return debug;
            }
        },
        $get:function($log){
            return {
                messageCount:0,
                log:function(msg){
                    if(debug){
                        $log.log("(LOG"+(counter?"+"+this.messageCount++ +")":")")+msg);
                    }
                }
            }
        }
    }
});