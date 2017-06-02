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
        this.fish = cc.find("Canvas/fish");
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        //adjust location in world location
        var start_degree = 90;
        var w_fish_pos = this.fish.convertToWorldSpaceAR(cc.p(0,0));
        var w_self_pos = this.node.convertToWorldSpaceAR(cc.p(0,0));
        //cocos postion plus to get dir 
        var dir = cc.pSub(w_fish_pos, w_self_pos);
        var radians = Math.atan2(dir.y,dir.x); //get radians
        // var degree = radians*180/3.14; 
        var degree = cc.radiansToDegrees(radians);  //coco radians to degress
        cc.log(degree);
        degree = 360-degree;
        this.node.rotation = degree +  start_degree;
    },
});
