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
        //
    },

    // use this for initialization
    onLoad: function () {
        var ske_com = cc.find("Canvas/JXM").getComponent(sp.Skeleton);

        //事件监听
        ske_com.setStartListener(function () {
            cc.log("setStartListener");
        });



        //清空0号管道，把in这个动画放到0号管道播放，false表示是否循环
        ske_com.setAnimation(0,"in",false);
        //添加一个动画到当前的管道
        // ske_com.addAnimation(0,"idle_1",false);
        //停止一个动画
        // this.scheduleOnce(function () {
        //     ske_com.clearTrack(0);  //清空制定管道动画播放
        //     // ske_com.clearTracks();  //清空素有管道动画播放
        // },5);
        ske_com.setEndListener(function () {
            cc.log("setEndListener");
        });


        var hanjie = cc.find("Canvas/hanjie").getComponent(cc.ParticleSystem);
        hanjie.stopSystem();//停止所有粒子播放
        hanjie.resetSystem();//重新播放粒子
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
