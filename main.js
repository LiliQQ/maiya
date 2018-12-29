import Vue from 'vue'
import App from './App'
import global from './components/Global'


Vue.prototype.GLOBAL = global
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
