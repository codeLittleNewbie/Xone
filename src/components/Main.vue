<template>
  <div id="main">
    <xo-header></xo-header>
    <el-row type="flex">
      <el-col :span="4">
        <xo-left-nav></xo-left-nav>
      </el-col>
      <el-col :span="20">
        <div class="content">
          <xo-nav-path></xo-nav-path>
        </div>
        <!--路由视图-->
        <!--<router-view></router-view>-->
        <xo-i-payment></xo-i-payment>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  import xoHeader from './Header.vue'
  import xoNavPath from './NavPath.vue'
  import xoLeftNav from './LeftNav.vue'
  import xoIPayment from './iPayment/Index.vue'


  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters([]),
      getMsg(){
        return this.msg;
      }
    },
    components: {
      xoHeader,
      xoNavPath,
      xoLeftNav,

      xoIPayment
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

<!-- 添加scoped属性为了限制CSS只在这个组件中生效 -->
<style scoped lang="less">
  .content {
    padding: 25px;
  }

  .contentMsg {
    padding: 0 25px 25px 25px;
  }
</style>
