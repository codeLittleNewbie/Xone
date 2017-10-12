<template>
  <div id="xoMenu" :style="{height:ListHeight+'px'}">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">

      <el-submenu index="1">
        <template slot="title">支付管理</template>
        <el-submenu index="1-1">
          <template slot="title">账户列表</template>
          <router-link to="/iPayment/accountList/newCount1">
            <el-menu-item index="1-1-1">新增账户(已开户)</el-menu-item>
          </router-link>
          <router-link to="/iPayment/accountList/newCount2">
            <el-menu-item index="1-1-2">新增账户(开户申请)</el-menu-item>
          </router-link>
          <router-link to="/iPayment/accountList/newCount3">
            <el-menu-item index="1-1-3">新增账户(美团开户申请)</el-menu-item>
          </router-link>
          <router-link to="/iPayment/accountList/newCount4">
            <el-menu-item index="1-1-4">查看账户</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">下发记录</template>
          <el-menu-item index="1-2-1">新增下发</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">门店管理</template>
        <el-submenu index="2-1">
          <template slot="title">门店列表</template>
          <el-menu-item index="2-1-1">新增门店</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">查看门店</template>
          <el-menu-item index="2-2-1">编辑</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-3">门店组</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">统计报表</template>
        <el-menu-item index="3-1">交易列表</el-menu-item>
        <el-menu-item index="3-2">交易统计</el-menu-item>
        <el-menu-item index="3-3">结算记录(x1 pro)</el-menu-item>
        <el-menu-item index="3-4">差异账单查询(x1 pro)</el-menu-item>
        <el-menu-item index="3-5">对账单(x1 pro)</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">营销管理(x1 pro)</template>
        <el-menu-item index="4-1">运行中的方案</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">基础设置</template>
        <el-menu-item index="5-1">商家信息</el-menu-item>
        <el-menu-item index="5-2">备用账户切换配置</el-menu-item>
        <el-menu-item index="5-3">客户端批量设置</el-menu-item>
        <el-menu-item index="5-4">支付方式</el-menu-item>
        <el-submenu index="5-5">
          <template slot="title">支付通道(x1 pro)</template>
          <el-submenu index="5-5-1">
            <template slot="title">权限管理</template>
            <el-menu-item index="5-5-1-1">用户组</el-menu-item>
            <el-menu-item index="5-5-1-2">用户管理</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">其他</template>
        <el-menu-item index="6-1">操作日志</el-menu-item>
        <el-submenu index="6-2">
          <template slot="title">帮助中心</template>
          <el-menu-item index="6-3">产品升级</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">文件夹</template>
        <el-menu-item index="7-1">业务流程</el-menu-item>
        <el-menu-item index="7-2">业务流程(满减满赠)</el-menu-item>
        <el-submenu index="7-3">
          <template slot="title">产品下载安装流程</template>
          <el-menu-item index="7-4">UI</el-menu-item>
        </el-submenu>
        <el-menu-item index="7-5">产品安装流程(min)</el-menu-item>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">客户端气泡</template>
        <el-menu-item index="8-1">气泡</el-menu-item>
      </el-submenu>

      <el-submenu index="9">
        <template slot="title">款易服务号</template>
      </el-submenu>

      <el-submenu index="10">
        <template slot="title">移动端</template>
        <el-menu-item index="10-1">开户(移动端)</el-menu-item>
      </el-submenu>


      <!--后期加上-->
      <!--<el-submenu v-for="(value,index) in leftList" :key="index">
        <template slot="title">{{value.name}}</template>
        <el-submenu v-for="(item,count) in value" v-if="subMenuOrItem(item)" index="count+1">
          <template slot="title">{{item.name}}</template>
        </el-submenu>
        <el-menu-item v-for="(item,count) in value" v-if="subMenuOrItem(item)" index="count+2">{{item.name}}</el-menu-item>
      </el-submenu>-->
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leftList: [
          {
            name: '支付管理',
            children: [
              {
                name: '账户列表',
                children: [
                  {
                    name: '新增账户(已开户)',
                    route: '/iPayment/countList/newCount1'
                  },
                  {
                    name: '新增账户(开户)',
                    route: '/iPayment/countList/newCount2'
                  }
                ]
              },
              {
                name: '下发记录',
                children: [
                  {
                    name: '新增记录'
                  }
                ]
              }
            ]
          },
          {
            name: '门店管理',
            children: [
              {
                name: '门店列表',
                /*children: [
                  {
                    name: '新增门店',
                    route:　''
                  }
                ]*/
              }
            ]
          }
        ],
        ListHeight: 0
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      this.ListHeight = window.innerHeight - 80;
    }
  }
</script>
<style>
  #xoMenu{
    overflow-y: scroll;
  }
</style>
