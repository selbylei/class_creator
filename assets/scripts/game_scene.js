

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        src_img: cc.SpriteFrame, 
    },

    // use this for initialization
    onLoad: function () {
        /*{ // 自定义事件的发送，节点A，向节点B发送事件
            var node_A = cc.find("Canvas/parent/bt");
            var node_B = cc.find("Canvas/parent");
            // var node_B = cc.find("Canvas/parent/bg_img");
            
            // 监听者，设置一个回掉函数给发送者。
            node_B.on("pkg_arrived", function(e){
                console.log("pkg_arrived called, you must recv");
                console.log(e.detail);
                // console.log(e.my_test);
            }, node_B);
            
            // 发送事件，触发这个事件
            // 方法一:
            // cc.Event.EventCustom 发送一个自定义事件, 事件的名称，以及是否要向上传递这个事件;
            
            this.scheduleOnce(function() {
                var costom = new cc.Event.EventCustom('pkg_arrived', true);
                costom.detail = {name:"小红"};
                costom.my_test = [1, 2, 3, 4];
                node_A.dispatchEvent(costom);
            }, 3);
            
            // 方法二: emit在传用户自定义数据的时候，会使用detail
            // 只有同一个节点接收与发送，才能使用emit;
            // node_B.emit("pkg_arrived", {name:"小红"});
            
            // 总结:
            // dispatchEvent 只能够冒泡的发送自定义事件;
            // emit 只能给自己发送自定义事件;
             this.scheduleOnce(function() {
                var costom = new cc.Event.EventCustom('pkg_arrived', true);
                costom.detail = {name:"小红"};
                costom.my_test = [1, 2, 3, 4];
                node_A.dispatchEvent(costom);
            }, 3);
            
           
        }*/
        
        /// 向好不相关的两个节点，发送自定义事件;
        // --->直接使用EventManager来进行发送自定义事件
        // var node_A = cc.find("Canvas/parent/bt");
        // // var node_B = cc.find("Canvas/parent");
        // var node_B = cc.find("Canvas/parent/bg_img");
        // cc.eventManager.addCustomListener("pkg_arrived", function(e){
        //     console.log("pkg_arrived called, you must recv");
        //     console.log(e.detail);
        // }.bind(node_B));
        
        
        // var costom = new cc.Event.EventCustom('pkg_arrived', true);
        // costom.detail = {name:"小红"};
        // cc.eventManager.dispatchEvent(costom);
        
            
        // 怎么样使用触摸事件;
        // 触摸事件触发者: OS 系统，检测到了用户触摸，就会发送给我们这个APP；
        // 如果我们要相应这个事件，那么我们就是这个事件的 监听者(Listener)，
        
        /*var bt = cc.find("Canvas/parent/bt");
        // node.on(type, callback函数对象, target);
        // type: 是你要监听的事件类型;
        // callback: 就是你要监听的回掉函数对象，
        // target, 如果你指定了target,那么在回掉的时候，target.callback(); 函数对象,
        // target callback绑定的this,除非用户自己显示的绑定了一个this对象到这个函数对象;
        // 如果不加target, callback(), 传事件的监听者;
        
        // 监听触摸事件, BEGAN, MOVED, ENDED, CANCELD 事件
        // BEGAn 触摸按下;  cc.Node.EventType.TOUCH_START
        // MOVED 触摸移动; cc.Node.EventType.TOUCH_MOVE
        // ended 触摸弹起； cc.Node.EventType.TOUCH_END
        // CANCED 触摸取消  cc.Node.EventType.TOUCH_CANCEL,弹起的范围不在节点的范围之内;
        // 什么是节点的范围呢？ // 节点的size;
        // 后面的move, ended, cancel是基于前面的start来的，如果没有start事件，就不会有后面的事件;
        // 节点的size,决定了触摸事件的响应范围
        
        bt.on(cc.Node.EventType.TOUCH_START, function(t){ // t是cc.Touch对象，是游戏引擎给你调回掉的时候new 的一个事件对象
            console.log(t);
            // console.log("touch start");
            // console.log(this); // this, == bt;
            // var s_com = this.getComponent(cc.Sprite);
            this.color = new cc.Color(128, 128, 128, 255);
            
            t.stopPropagation(); // 停止向上传递这个事件对象,上一层次的节点就再也无法收到事件;
            console.log(t.getID());
        }, bt);
        
        bt.on(cc.Node.EventType.TOUCH_MOVE, function(t){
            console.log("touch move");
        }, bt);
        
        bt.on(cc.Node.EventType.TOUCH_END, function(t) {
            console.log("touch ended");
            this.color = new cc.Color(255, 255, 255, 255);
        }, bt);
        
        bt.on(cc.Node.EventType.TOUCH_CANCEL, function(t) {
            console.log("touch canceld");
            this.color = new cc.Color(255, 255, 255, 255);
        }, bt);
        
        
        this.node.on(cc.Node.EventType.TOUCH_START, function(t){
            console.log("CAVANS touch start");
        });
        
        var p = cc.find("Canvas/parent");
        p.on(cc.Node.EventType.TOUCH_START, function(){
            console.log("parent touch start");
        });
        
        { //System Event
            // 怎么样样终止一个事件对象的冒泡传递?
            // Step1: 你得要拿到这个事件对象, app 调用我们的回掉函数之前，会new 这样的事件对象，通过回掉函数的参数传递进来;
            // Step2: 终止这个时间的向上传递;
            // 注意，每一个事件都会独立的往上报，如果你不想晚上报，每一个都加上stop;
            // end 
            */
            // var player = cc.find("Canvas/parent/player");
            // player.active = false;
            // var parent = cc.find("Canvas/parent");
            // var bt = cc.find("Canvas/parent/bt");
            // bt.on(cc.Node.EventType.TOUCH_START,function(t){
            //     cc.log("touch start");
            //     cc.log(this);
            //     cc.log(t);
            //     this.color=new cc.Color(128,128,128,255);
            //     t.stopPropagation();
            // },bt);
            
            //  bt.on(cc.Node.EventType.TOUCH_MOVE,function(t){
            //     cc.log("touch move");
            //     t.stopPropagation();
            // },bt);
            
            //  bt.on(cc.Node.EventType.TOUCH_END,function(t){
            //     cc.log("touch end");
            //     this.color=new cc.Color(255,255,255,255);
            //     t.stopPropagation();
            // },bt);
            
            //  bt.on(cc.Node.EventType.TOUCH_CANCEL,function(t){
            //     cc.log("touch cancel");
            //     this.color=new cc.Color(255,255,255,255);
            //     t.stopPropagation();
            // },bt);
            
            // parent.on(cc.Node.EventType.TOUCH_START, function(t){
            //     cc.log("parent touch start");
            //     cc.log(this);
            // });
            
            
            // this.node.on(cc.Node.EventType.TOUCH_START,function(t){
            //     cc.log("Canvas touch start");
            // });
            
            //  this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){
            //     cc.log("Canvas touch start");
            // });
        // }
        
        // var player = cc.find("Canvas/parent/player");
        // player.active = false;
        // {   // EventCustom  
        //     var bt=cc.find("Canvas/parent/bt");
        //     var parent = cc.find("Canvas/parent");
            //child node dispatchEvent
            //use detail to send data
            /////method one : dispatchEvent()
            // this.scheduleOnce(function(){
            //     var custom = new cc.Event.EventCustom('evnt1',true);
            //     custom.detail={
            //         name:"selbylei"
            //     };
            //     bt.dispatchEvent(custom);
            // },3);
            // //only parent node Listener EventCustom
            // parent.on("evnt1",function(t){
            //     cc.log("evnt1 called you must recv ande this data is:" + t.detail.name);
            // },parent);
            // this.node.on("evnt1",function(t){
            //     cc.log("parent's parent listener event:"+t.detail.name);
            // });
            
            // ////method tow:emit()
            // this.scheduleOnce(function(){
            //   bt.emit("event2",{name:"selbylei"});
            // },10);
            // bt.on("event2",function(){
            //     cc.log("emit event2");
            // });
            
            ////method three:use cc.eventManager.addCustomListener()
        // }
            
    //   {
    //       var player = new cc.find("Canvas/parent/player");
    //         player.active = false;
    //         var bt = cc.find("Canvas/parent/bt");
    //         var parent = bt.parent;
    //         bt.on(cc.Node.EventType.TOUCH_START,function(t){
    //             cc.log("bt touch start");
    //             cc.log(t.getLocation());
    //             var newVec2 = this.convertTouchToNodeSpace(t);
    //             cc.log(newVec2);
    //         },bt);  
            
    //         bt.on(cc.Node.EventType.TOUCH_MOVE,function(t){
    //             cc.log(t.getDelta());
    //         });
    //   }
    
    
              
     
            var bt = cc.find("Canvas/parent/bt");
            // //move action 
            // var m1 = cc.moveTo(1, 100, 100);
            // var m2 = cc.moveBy(1,100,100);
            // var m3 = cc.rotateTo(2,-45);
            // var m4 = cc.rotateBy(2, -45);
            // var m5 = cc.scaleTo(2,2);
            // // bt.runAction(m5);
            // this.scheduleOnce(function(){
            //     var m6 = cc.scaleBy(2,0.5);
            //     //  bt.runAction(m6);
            // },5);
            // var m7 = cc.fadeOut(3);
            // bt.runAction(m7);
            // this.scheduleOnce(function(){
            //   var m8 = cc.fadeIn(3);
            // bt.runAction(m8);
            // },5);
            
            // var m9 = cc.callFunc(function(target,data){
            //     cc.log(data);
            // }, bt,['selby','lei']);
            
            // bt.runAction(m9);
            
            // var m10 = cc.rotateBy(5,360);
            // var rep = cc.repeat(m10, 3);
            // bt.runAction(rep);
            
            // var r = cc.rotateBy(3,360);
            // var s = cc.scaleTo(3,2);
            // var end_func = cc.callFunc(function(target,data){
            //     cc.log(data.tag);
            // }, bt,{tag:"end func"});
            // var actionArray = [r,s,end_func];
            // var seq = cc.sequence(actionArray);
            // // bt.runAction(seq);
            // var spwan = cc.spawn(actionArray);
            // bt.runAction(spwan);
            
            bt.opacity = 0;
            var fin = cc.fadeIn(3);
            var delay = cc.delayTime(5);
            var fout  = cc.fadeOut(5);
            var end_func = cc.callFunc(function(){
                bt.removeFromParent(true);
            });
            var seq = cc.sequence([fin,delay,fout,end_func]);
            bt.runAction(seq);
        
            this.scheduleOnce(function(){
                bt.stopAction(seq);
            },2)
    },   
            
    
    start: function() {
        // var bt = cc.find("Canvas/parent/bt");
        // var parent = bt.parent;
        // // var pos = parent.convertToNodeSpace(cc.p(0,0));
        // // bt.setPosition(pos);
        // // var w_pos = bt.convertToWorldSpaceAR(cc.p(0,0));
        // // cc.log(w_pos)
        // cc.log(bt.getBoundingBox());
        // cc.log(bt.getBoundingBoxToWorld());
        
        // cc.log(parent.getBoundingBox());
        // cc.log(parent.getBoundingBoxToWorld());
        
        
    },
    
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        // console.log("game_scene update", dt);
    },
});
