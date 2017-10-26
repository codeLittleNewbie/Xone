/**
 * Created by W-Q on 2017/9/21.
 */
export default{
  // 测试方法,开发时可以删除
  getData(state, getters, rootState){
    return state.data;
  },
  getTopHeight(state){
    return state.height;
  },
  getNavPath(state){
    return state.navPath;
  },
  // 获取isLoading状态
  getLoadingStatus(state){
    return state.isLoading;
  }
}
