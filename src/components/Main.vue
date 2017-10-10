<template>
  <div class="hello">
    <Header></Header>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import Header from './Header.vue'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed : {
      ...mapGetters([

      ]),
      getMsg(){
          return this.msg;
      }
    },
    components : {
        Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加scoped属性为了限制CSS只在这个组件中生效 -->
<style scoped lang="less">

</style>
