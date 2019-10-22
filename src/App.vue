<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'app',
   created () {
    if (localStorage.getItem('store')) {
      // store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))));
      console.log('1111111111')
      let files =  JSON.parse(localStorage.getItem('store')).fileList;
      console.log(files)
      files.map(item => {
        let { src, title } =item;
        store.commit('ADD_FILE',{ src, title });
      })
    }
    window.addEventListener('beforeunload',this.keepStore,false)
  },
  destroyed(){
    window.removeEventListener('beforeunload',this.keepStore,false)
  }
  ,
  methods:{
    keepStore(){
      localStorage.setItem('store', JSON.stringify(store.state))
    }
  }
}
</script>

<style lang="scss">
  html,body, #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 1;
  }
</style>
