<template>
    <div class="Home">
        <FileUpload/>
        <div class="btn">
            <Button type="info" @click="jump">create</Button>
        </div>
    </div>
</template>

<script>
import FileUpload from '@/components/FileUpload'
import { Button } from 'iview';
export default {
    name: 'home',
    components:{
        FileUpload,
        Button
    },
    methods:{
        jump(){
            this.$router.push({
                name:'surprise'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
div.btn{
    margin:10px auto;
    text-align: center;
}
</style>