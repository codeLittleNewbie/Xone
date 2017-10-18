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
          <el-form ref="form" :model="form" label-width="0px">
            <el-col :span="24" class="cell">
              <el-col :span="16">
                <el-form-item>
                  <el-col :span="7" >
                    <el-select v-model="form.value" placeholder="请选择">
                      <el-option
                        v-for="item in form.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <el-select v-model="form.value" placeholder="请选择">
                      <el-option
                        v-for="item in form.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <el-select v-model="form.value" placeholder="请选择">
                      <el-option
                        v-for="item in form.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="16">
                    <el-input v-model="form.storeInfo" placeholder="请输入门店名称"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="1">
                    <el-button>搜索</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="23">
                    <el-tree
                      :data="form.data2"
                      show-checkbox
                      node-key="id"
                      :default-expanded-keys="[1, 2, 3]"
                      :default-checked-keys="[1, 2, 5]"
                      :props="defaultProps">
                    </el-tree>
                  </el-col>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-card>
                  <div class="selectedStore">已选门店</div>
                  <el-tree
                    :data="form.data2"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[1, 2, 3]"
                    :default-checked-keys="[1, 2, 5]"
                    :props="defaultProps"
                    style="margin-top: 10px;">
                  </el-tree>
                </el-card>
              </el-col>
            </el-col>
          </el-form>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
  import xoNavPath from './NavPath.vue'

  export default {
    data() {
      return {
        form: {
          data2: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '',
          storeInfo: ''
        }
      }
    },
    props: {
      defaultProps: {
        children: 'children',
        label: 'label'
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

  .selectedStore {
    padding-bottom: 10px;
    border-bottom: 1px solid gainsboro;
  }

  .cell {
    margin-top: 20px;
  }
</style>
