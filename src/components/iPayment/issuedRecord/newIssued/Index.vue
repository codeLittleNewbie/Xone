<template>
  <div id="newIssued">
    <div class="contentMsg">
      <xo-nav-path></xo-nav-path>
    </div>
    <div class="contentMsg">
      <el-card>
        <el-row>
          <el-col :span="24" style="border-bottom: 1px solid gainsboro">
            <h3 style="margin-bottom: 10px;">添加门店</h3>
          </el-col>
          <el-form ref="form" :model="form" label-width="120px">


            <el-col :span="24" class="cell">
              <el-form-item label="第三方编码:"
                            v-for="(domain, index) in form.domains"
                            :label="'第三方编码 ' + index + ':'"
                            :key="domain.key"
                            :prop="'domains.' + index + '.value'"
              >
                <el-col :span="7">
                    <el-input v-model="domain.code1"></el-input>
                </el-col>
                <el-col :span="1" style="text-align: center;">
                  -
                </el-col>
                <el-col :span="11">
                    <el-input v-model="domain.code2"></el-input>
                </el-col>

                <el-col :span="4" :offset="1">
                  <el-button @click.prevent="removeDomain(domain)" type="danger" style="border-radius: 100px"
                             size="small" icon="minus"></el-button>
                  <el-button @click="addDomain" type="primary" icon="plus" style="border-radius: 100px"
                             size="small"></el-button>
                </el-col>

              </el-form-item>
            </el-col>


            <el-col :span="24" class="cell">
              <el-col :span="24">
                <el-form-item>
                  <el-col :span="7">
                    <el-select v-model="form.value" placeholder="--省份--">
                      <el-option
                        v-for="item in form.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <el-select v-model="form.value" placeholder="--城市--">
                      <el-option
                        v-for="item in form.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <el-select v-model="form.value" placeholder="--门店标签--">
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
                    <el-input v-model="form.storeInfo" placeholder="请输入门店关键字"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="1">
                    <el-button>搜索</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-transfer v-model="form.data" :data="form.data2" :titles="['门店','已选门店']"></el-transfer>
                </el-form-item>
              </el-col>
            </el-col>
          </el-form>
          <el-col :span="24">
            <el-col :span="12" class="flex-jc">
              <el-button>取消</el-button>
            </el-col>
            <el-col :span="12" class="flex-jc">
              <el-button type="primary" @click="submitForm('form')">确定</el-button>
            </el-col>
          </el-col>
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
          data: [2], // 已选门店key
          data2: [
            {
              key: 10,
              label: '门店组1',
            },
            {
              key: 2,
              label: '门店组2',
            },
            {
              key: 3,
              label: '门店组3',
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
          storeInfo: '',
          domains: [{
            code1: '',
            code2: ''
          }]
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
    },
    methods: {
      removeDomain(item) {

        if (this.form.domains.length == 1) {
          this.$message('不能再删啦');
        } else {
          var index = this.form.domains.indexOf(item);
          if (index !== -1) {
            this.form.domains.splice(index, 1)
          }
        }
      },
      addDomain() {
        this.form.domains.push({
          value: '',
          key: Date.now()
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
