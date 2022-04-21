import Vue from 'vue'
import App from './App.vue'
import ProductListPage from './components/ProductListPage.vue'
import ProductDetailPage from './components/ProductDetailPage.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)


const routes = [
    { path: '/', component: ProductListPage },
    { path: '/productdetailpage/:item_id', component: ProductDetailPage },
  ]
  
 const router = new VueRouter ({
   routes
 })

Vue.config.productionTip = false

new Vue({
router: router,
  render: h => h(App),
}).$mount('#app')
