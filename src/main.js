// 入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI组件
import {Header, Swipe, SwipeItem} from 'mint-ui'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入自己的router.js路由模块
import router from './router.js'

//导入app根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router//挂载路由对象到vm实例上
})