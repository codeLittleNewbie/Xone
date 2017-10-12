/**
 * Created by W-Q on 2017/9/21.
 */
import getters from './getters'
import * as types from './type'

const state = {
  // 测试数据,开发时可以删除
  data: 0,
  height: 0
};

const mutations = {
  // 测试方法,开发时可以删除
  [types.CLICK](state){
    state.data++;
  },
  [types.TOPHEIGHT](state, height){
    state.height = height;
  }
};

export default {
  state,
  getters,
  mutations
}
