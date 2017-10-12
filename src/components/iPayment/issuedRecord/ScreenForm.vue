<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="count"
        label="序号"
        width="65">
      </el-table-column>

      <el-table-column
        prop="paymentMethod"
        label="支付方式"
        width="93">
      </el-table-column>


      <el-table-column
        prop="payment"
        label="支付通道"
        width="93">
      </el-table-column>

      <el-table-column
        prop="account"
        label="账户"
        width="131">
      </el-table-column>

      <el-table-column
        prop="date"
        label="时间"
        width="170">
      </el-table-column>

      <el-table-column
        prop="lastEdit"
        label="操作员">
      </el-table-column>

      <el-table-column
        prop="executionTime"
        label="待执行时间"
        width="170">
      </el-table-column>

      <el-table-column
        prop="state"
        label="状态"
        width="100"
        :filters="[{ text: '成功', value: '成功' }, { text: '待执行', value: '待执行' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template scope="scope">
          <el-tag
            :type="scope.row.state === '成功' ? 'primary' : 'danger'"
            close-transition>{{scope.row.state}}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="lastEdit"
        label="操作">
        <template scope="scope">
          <el-button size="small" @click="dialogTableVisible = true">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          count: 1,
          paymentMethod: ['支付宝', ' 微信支付'],
          payment: ['易极付', ' 通联'],
          account: ['炳胜(马场店)', ' 炳胜(兴盛路店)'],
          date: '2017-9-26  12:00:00',
          lastEdit: '张三',
          state: '成功',
          executionTime: '已完成'
        }, {
          count: 1,
          paymentMethod: ['支付宝', ' 微信支付'],
          payment: ['易极付', ' 通联'],
          account: ['炳胜(马场店)', ' 炳胜(兴盛路店)'],
          date: '2017-9-26  12:00:00',
          lastEdit: '张三',
          state: '待执行',
          executionTime: '2017-3-34 12:32:32',
        },
          {
            count: 1,
            paymentMethod: ['支付宝', ' 微信支付'],
            payment: ['易极付', ' 通联'],
            account: ['炳胜(马场店)', ' 炳胜(兴盛路店)'],
            date: '2016-05-02',
            lastEdit: '张三',
            executionTime: '2017-3-34 12:32:32',
            state: '待执行',
          },
          {
            count: 1,
            paymentMethod: ['支付宝', ' 微信支付'],
            payment: ['易极付', ' 通联'],
            account: ['炳胜(马场店)', ' 炳胜(兴盛路店)'],
            date: '2016-05-02',
            lastEdit: '张三',
            executionTime: '2017-3-34 12:32:32',
            state: '待执行',
          }],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.state === value;
      }
    }
  }
</script>
