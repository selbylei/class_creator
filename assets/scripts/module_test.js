var my_base = {
    base_func: function() {
        console.log("base_func");
        console.log(this);
    }
};

var module_create = function(p1, p2) {
    // 这里的this,就是外面的new_object
    this.name = p1;
    this.sub_name = p2;
    module_create.prototype.base_func = my_base.base_func;
    
    this.member_func = function() {
        console.log("member_func");
        console.log("========");
        console.log(this);
        console.log("=====end====");
    }
}

// 导出的是一个函数对象
module.exports = module_create;


