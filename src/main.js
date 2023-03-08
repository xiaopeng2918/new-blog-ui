import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 清除默认样式
import '@/assets/css/base.css'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
