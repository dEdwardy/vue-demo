<template>
  <div class="Surprise">
      <section>
          <div v-for="(item,key) in getFileList"  :key="key" :ref="'div'+(key+1)" class="img"></div>
      </section>
      <!-- <img src="~assets/imgs/2.jpeg" alt=""> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from "@/store";
export default {
    name: 'Surprise',
    props:{
        imgsArr:{
            type:JSON
        },
        perspective:{
            type:Number,
            default:1300
        }
    },
    data(){
        return{
            imgs:[]
        }
    },
    computed:{
        ...mapGetters([
            'getFileList'
        ])
    },
    mounted(){
        console.warn(this.getFileList)
        console.warn(store.getters.getFileList)
        this.imgs = [{
                src:require('./../../assets/imgs/3.jpg')
            },{
                src:require('./../../assets/imgs/2.jpeg')
            },{
                src:require('./../../assets/imgs/3.jpg')
            },{
                src:require('./../../assets/imgs/2.jpeg')
            },{
                src:require('./../../assets/imgs/3.jpg')
            },{
                src:require('./../../assets/imgs/2.jpeg')
            },{
                src:require('./../../assets/imgs/3.jpg')
            },{
                src:require('./../../assets/imgs/2.jpeg')
            }]
        this.$nextTick(() => {
            document.querySelector('body').style.cssText = `perspective: ${this.perspective}px`;
            let divs = document.querySelectorAll('.img');
            console.log(divs)
            divs = Array.from(divs);
            let n = divs.length;
            console.log(divs.length)
            let imgs = this.imgs.map(item => {
                return item.src
            });
            console.warn(imgs)
            divs.forEach((item,key) => {
                item.style.cssText=`background:url(${this.getFileList[key].src}) no-repeat;background-size:100% 100%;transform: rotateY(${360*(key)/n}deg) translateZ(500px)`;
            })
        })
    },
    // mounted(){
    //     this.$nextTick(() => {
    //         console.log(this.$refs)
    //     })
    // }
    
}
</script>

<style lang="scss" scoped>

@keyframes rotate {
        0%{
            transform: rotateY(0)
        }
        100%{
            transform: rotateY(360deg)
        }
    }
*{
    margin:0;
    padding:0;
}
body{
        section{
            position: relative;
            width: 300px;
            height: 200px;
            margin: 150px auto;
            transform-style: preserve-3d;
            animation: rotate 50s linear infinite;
            &:hover{
                animation-play-state: paused;
            }
            & div{
                opacity: .9;
                position: absolute;
                top:0;
                left: 0;
                width: 100%;
                height:100%;
                // background:  url('../../../public/imgs/2.jpeg') no-repeat;
                // background-size: 100% 100%;
            }
    }
}
</style>