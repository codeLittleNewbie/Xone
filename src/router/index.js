import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import IPayment from '../components/iPayment/accountList/Index.vue'
import Login from '../components/login/Login.vue'
import Users from '../components/user/Users.vue'
import Account from '../components/iPayment/accountList/account/Index.vue'
import Record from '../components/iPayment/issuedRecord/Index.vue'
import NewIssued from '../components/iPayment/issuedRecord/newIssued/Index.vue'
import NotFound from '@/components/404/NotFound.vue'
import BusinessInfo from '@/components/infrastructure/BusinessInfo/Index.vue'
import BackupAcc from '@/components/infrastructure/BackupAcc/Index.vue'
import VolumeSet from '@/components/infrastructure/VolumeSet/Index.vue'
import NewAdd from '@/components/infrastructure/VolumeSet/NewAdd/Index.vue'

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
          name: '支付管理/账户列表/新增账户',
          component: Account
        },
        {
          // 支付管理/下发记录
          path: '/iPayment/issuedRecord',
          name: '支付管理/下发记录',
          component: Record,
        },
        {
          // 支付管理/新增下发
          path: '/iPayment/issuedRecord/newIssued',
          name: '支付管理/下发记录/新增下发',
          component: NewIssued,
        },




        // 基础设置/商家信息
        {
          path: '/infrastructure/BusinessInfo',
          name: '基础设置/商家信息',
          component: BusinessInfo
        },
        // 基础设置/备用账户切换
        {
          path: '/infrastructure/BackupAcc',
          name: '基础设置/备用账户切换',
          component: BackupAcc
        },
        // 基础设置/客户端批量设置
        {
          path: '/infrastructure/VolumeSet',
          name: '基础设置/客户端批量设置',
          component: VolumeSet
        },
        {
          path: '/infrastructure/VolumeSet/newAdd',
          name: '基础设置/客户端批量设置/新增门店',
          component: NewAdd
        }



      ]
    },
    {
      path: '/', redirect: '/users'
    },
    /*{
      path: '*', redirect: '/login'
    },*/
    {
      path: '/login',
      component: Login,
      name: '登陆页',
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
  ]
})
