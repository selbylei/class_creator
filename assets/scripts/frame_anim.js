cc.Class({
    extends: cc.Component,

    properties: {
        
        sprite_frames:{
            default:[],
            type:cc.SpriteFrame,
        },
        duration:0.3, //frame delay time
        play_onload :false,  //play on node loading
        loop:false, //is  display loop
    },

    // use this for initialization
    onLoad: function () {
        var s_com = this.node.getComponent(cc.Sprite);
        if (!s_com) {//hava no cc.Sprite,must add an cc.Sprint component
            s_com = this.node.addComponent(cc.Sprite);  //add a cc.Spring component
        }
        this.sprite = s_com; //play frame animation's cc.Sprite Component
        this.is_playing = this.play_onload;
        this.play_time = 0;
        this.play_loop = this.loop;
        this.end_func = null;
        
        this.sprite.spriteFrame = this.sprite_frames[0];
        if(this.is_playing){
            if(!this.loop){
                 this.play_onece(null);  
            }else{
                this.play_looper(null);
            }
        }
    },
    
    start:function(){
      
    },
    
    //stop anim
    stop_anim:function(){
        this.play_time=0;
        this.is_playing = false;
        this.play_loop=false; 
    },
    
    //paly stop hava callback
    play_onece:function(end_func){
        this.play_time=0;
        this.is_playing = true;
        this.play_loop=false; 
        this.end_func = end_func;
    },
    
    play_looper:function(){
        this.play_time=0;
        this.is_playing = true;
        this.play_loop=true;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
         //adjust time to decide frame,cannot frame to next frame , becuase fps is not fixed
         if(this.is_playing === false){
             return;
         }
         this.play_time+=dt; 
         //rember current time mulit duration
         //get index ;floor get small inter
         var index = Math.floor(this.play_time/this.duration);  
         if(this.play_loop === false){
             if(index>=this.sprite_frames.length){  //no loop play stop
                 this.sprite.spriteFrame = this.sprite_frames[this.sprite_frames.length-1];
                 this.is_playing = false;
                 this.play_time = 0;
                 if(this.end_func!==null){
                     this.end_func();
                 }
                 return;
             }else{
                 this.sprite.spriteFrame = this.sprite_frames[index];
             }
         }else{
             while(index>=this.sprite_frames.length){
                 index-=this.sprite_frames.length;
                 this.play_time-=this.duration*this.sprite_frames.length;
             }
             this.sprite.spriteFrame = this.sprite_frames[index];
         }
    },
});
