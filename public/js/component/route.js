require("mmRouter", function() {

    //使用路由器的几个步骤
    //1先加载mmRouter（请将mmRouter.js, mmHistory.js这两个文件与avalon.js放在一起）
    //2定义VM
    var model = avalon.define('test1', function(vm) {
        vm.currPath = ""
        vm.name = "司徒正美"
        vm.password = "123456"
        vm.param = ""
    })
    //3定义路由规则
    avalon.router.get("/aaa", function(a) {
        model.currPath = this.path
    })
    avalon.router.get("/", function(a) {
        model.currPath = "index"
    })
    avalon.router.get("/bbb", function(a) {
        model.currPath = this.path
    })
    avalon.router.get("/ccc", function(a) {
        model.currPath = this.path
    })
    avalon.router.get("/ddd/:ddd", function(a) {//:ddd为参数

        model.param = a
        model.currPath = this.path
    })
    avalon.router.get("/eee", function(a) {
        model.currPath = this.path
    })
    //4启动历史管理器，
    avalon.history.start({
        html5Mode: true //可以将这里改成false再测试
    })
    //5开始扫描
    avalon.scan()
})