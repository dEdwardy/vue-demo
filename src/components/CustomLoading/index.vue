<template>
  <div class="CustomLoading">
      <div class="progressNum">{{ progressNum }}%</div>
      <div class="loadingContainer">
          <div class="loaded" :style="{ width:progressNum+'%' }"></div>
          <div class="unloaded"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CustomLoading',
    props:{
        progressNum:{
            type:Number,
            default:0
        }
    },
    methods:{
        changeProgress(value){ 
           this.progressNum =value;
        }
    }
}
</script>

<style lang="scss" scoped>
.CustomLoading{
    width: 90%;
    margin:0 auto;
    text-align: center;
    .progressNum{
        text-align: center;
    }
    .loadingContainer{
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 6px;
        border-radius: 2px;
        .loaded{
            width:0;
            background-color:rgb(76, 164, 214);
        }
        .unloaded{
            flex: 1;
            background-color:rgb(218, 26, 101);
        }
    }
}
</style>