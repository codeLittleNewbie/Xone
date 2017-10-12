import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import IPayment from '../components/iPayment/accountList/Index.vue'
import Login from '../components/login/Login.vue'
import Users from '../components/user/Users.vue'
import Account from '../components/iPayment/accountList/account/Index.vue'
import Record from '../components/iPayment/issuedRecord/Index.vue'

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
          path: '/iPayment/accountList',
          name: '支付管理/账户列表',
          component: IPayment,
        },
        {
          path: '/iPayment/accountList/account',
          component: Account
        },
        {
          // 支付管理/新增下发
          path: '/iPayment/issuedRecord',
          name: '支付管理/新增下发',
          component: Record,
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
