<template>
  <div id="paymentWay">
    <div class="contentMsg">
      <el-row>
        <el-col :span="24">
          <el-col :span="18">
            <xo-nav-path></xo-nav-path>
          </el-col>
          <el-col :span="2" :offset="2">
            <el-button icon="plus" size="small" type="primary">新增支付方式</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div class="contentMsg">
      <el-card>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="count"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>
<script>
  import xoNavPath from './NavPath.vue'
  export default {
    data(){
      return{
        tableData: [{
          count: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          count: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
