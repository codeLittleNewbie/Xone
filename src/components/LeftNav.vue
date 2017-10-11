<template>
  <div id="xoMenu">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">

      <el-submenu index="1">
        <template slot="title">支付管理</template>
        <el-submenu index="1-1">
          <template slot="title">账户列表</template>
          <router-link to="/iPayment/countList/newCount1"><el-menu-item index="1-1-1">新增账户(已开户)</el-menu-item></router-link>
          <el-menu-item index="1-1-2">新增账户(开户申请)</el-menu-item>
          <el-menu-item index="1-1-3">新增账户(美团开户申请)</el-menu-item>
          <el-menu-item index="1-1-4">查看账户</el-menu-item>
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


      <el-submenu v-for="(value,index) in leftList" index="3" v-if="value.children != 'undefined'">
        <template slot="title" v-if="value.children != 'undefined'">{{value.name}}</template>
        <el-menu-item index="index" v-if="value.children == 'undefined'">{{value.name}}</el-menu-item>
        <el-submenu index="index" v-if="value.children != 'undefined'"></el-submenu>
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          leftList: [
            {
              name: '支付管理',
              /*children: [
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
                }
              ]*/
            }
          ],
          a: []
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>
