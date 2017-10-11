<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="序号"
      width="65">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.count }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="账户编号"
      width="95">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.accountNum }}</span>
      </template>
    </el-table-column>
    <!--<el-table-column
      label="日期"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>-->
    <el-table-column
      label="账户名称"
      width="140">
      <template scope="scope">
        <el-input v-model="scope.row.account" placeholder=""></el-input>
        <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
      </template>
    </el-table-column>
    <el-table-column
      label="支付通道"
      width="95">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.payment }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.status }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="查看"
      width="90">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>序号: {{ scope.row.count }}</p>
          <p>账号编号: {{ scope.row.accountNum }}</p>
          <p>账号名称: {{ scope.row.account }}</p>
          <p>支付通道: {{ scope.row.payment }}</p>
          <p>状态: {{ scope.row.status }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>查看</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="删除">
      <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          count: 1,
          accountNum: 11233,
          account: '支付宝',
          payment: '易极付',
          status: '开户成功',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          count: 1,
          accountNum: 11233,
          account: '支付宝',
          payment: '易极付',
          status: '开户成功',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          count: 1,
          accountNum: 11233,
          account: '支付宝',
          payment: '易极付',
          status: '开户成功',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          count: 1,
          accountNum: 11233,
          account: '支付宝',
          payment: '易极付',
          status: '开户成功',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
