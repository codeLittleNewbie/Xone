<template>
  <div id="newAdd">
    <div class="contentMsg">
      <xo-nav-path></xo-nav-path>
    </div>
    <div class="contentMsg">
      <el-card>
        <el-row>
          <el-col :span="24" style="border-bottom: 1px solid gainsboro">
            <h3 style="margin-bottom: 10px;">添加门店</h3>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
  import xoNavPath from './NavPath.vue'

  export default {
    data(){
      return{

      }
    },
    components: {
      xoNavPath
    }
  }
</script>
<style scoped lang="less">
  .contentMsg {
    padding: 0 0 25px 0;
  }
</style>
