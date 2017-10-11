import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import IPayment from '../components/iPayment/accountList/newAccountO/Index.vue'
import Login from '../components/login/Login.vue'
import Users from '../components/user/Users.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      name: '首页',
      component: Main,
      children:[
        {
          // 支付管理/账户列表
          path: '/iPayment/accountList/newCount1',
          name: '新增账户(已开户)',
          component: IPayment
        },
        {
          path: '/iPayment/accountList/newCount2',
          name: '新增账户(开户申请)',
          component: IPayment
        },
        {
          path: '/login',
          name: '登陆页',
          component: Login
        },
        {
          path: '/users',
          name: '登陆页',
          component: Users
        },
      ]
    },
    {
      path: '/', redirect: '/users'
    },
    {
      path: '*', redirect: '/login'
    }
  ]
})
