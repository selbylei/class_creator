cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
      
    },
    
    start:function () {
        var hero = cc.find("Canvas/bg/hero");
        var frame_anim = hero.getComponent("frame_anim");
         
        // frame_anim.play_onece(function(){
        //         cc.log(frame_anim);
        //     hero.active = false;
           
        // });
        
        frame_anim.play_looper();  
        
        this.scheduleOnce(function(){
            // frame_anim.stop_play();
            frame_anim.stop_anim();
        },10);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
