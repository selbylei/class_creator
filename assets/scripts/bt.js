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
    },

    // use this for initialization
    onLoad: function () {
        //get animation Component 
        var animation = this.getComponent(cc.Animation);
        cc.log(animation);
        
        //regester 'finished' 
        animation.on('finished',function(){
            this.node.removeFromParent(true);
            cc.log("animation finished");
         },this);
        
        //play animation
        animation.play();
        // this.scheduleOnce(function(){
        //     animation.stop();
        // },5);
    },
    
    
    animation_fun:function(param){
        cc.log("animation_fun param:"+param);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
