/**
 * Created by W-Q on 2017/9/21.
 */
import * as types from './type'

export default {
  // 测试方法,开发时可以删除
  click({commit}){
    commit(types.CLICK);
  },
}
