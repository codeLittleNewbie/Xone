<template>
  <div class="hello">
    {{msg}}
    <el-button type="info">info</el-button>
    {{getMsg}}
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1, h2 {
    font-weight: normal;
  }

  div {
    background: pink;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
