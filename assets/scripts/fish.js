cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     default: null,      // The default value will be used only when the component attaching
        //                         //   to a node for the first time
        //     url: cc.Texture2D,  // optional, default is typeof default
        //     serializable: true, // optional, default is true
        //     visible: true,      // optional, default is true
        //     displayName: 'Foo', // optional
        //     readonly: false,    // optional, default is false
        // },
        // ...
        SPEED_X:100,
 
        
    },

    // use this for initialization
    onLoad: function () {
        this.shot_dst = cc.find("Canvas/fish");
    },
    

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var init_x = this.node.x;
        var s_x = dt*this.SPEED_X;
        // var s_y = dt*this.SPEED_Y;
 
        this.node.x-=s_x;
        // this.node.y-=s_y
        
        if(this.node.x<=-600){
            this.node.x=600;
        }
    
         
        
    },
});
