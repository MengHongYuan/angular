# angular 学习记录


#3.4.2
#1.服务(service)
#通过在作用域间创建一个单例的服务,由该服务来处理各个作用域的数据通信.
#2.事件(event)
#调用Angular中提供的两个方法:
#$broadcasted的功能是将事件从父级作用域传播至子级作用域
#调用格式  $broadcast(eventname,data);
#其中,参数evnetname为定义的事件名称,data为事件传播过程中携带的数据信息.
#emitted的功能是将事件从子级作用域传播至父级作用域
#调用格式  $emitted(eventname,data);
#除这两个传播事件的方法外,还需要通过调用$on方法,在作用域中监控传播来的事件并获取相应的数据.
#调用格式  $on(eventname,function(event,data){//接收传播事件的处理代码});
#event.targetScope         返回发起传播事件的作用域名称
#event.currentScope        返回正在接收传播事件的作用域名称
#event.name                传播事件的名称
#evnet.stopPropagation()   防止事件进行冒泡操作的函数
#evnet.preventDefault()    阻止代码事件的发生
#event.defaultPrevented    当执行了preventDefault()方法时,该属性值为true,否则为false