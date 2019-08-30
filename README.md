# exam_system
考试管理系统

### 项目介绍：
    这是一款关于考试的后台管理系统，用于学校老师、领导，查看或添加试题。可以让学生方便的在平台上进行考试。登录之后，不同的身份，左边显示的路由导航也是不同的，通过点击路由导航，右边会切换到对应的视图。也就是说不同的身份，所展示的视图，所操作的功能都是不同的。


### 技术栈：

    前端：HTML5 + CSS、
         Vue框架、
         axios、
         ElementUi库、

    后台：egg框架、
         mysql数据库、

### 目录结构：
    
    /src/
        /api            //所有接口
        /components     //全局组件
        /config         //配置插件
        /router         //路由
        /scss           //css样式
        /store          //vuex仓库
        /utils          //公用方法
        /views          //视图组件
        App.vue         //根组件
        main.js         //入口文件

### 指令：
    启动前台(demo里)：     npm run serve
    启动后台(exam-egg里)： npm run dev
