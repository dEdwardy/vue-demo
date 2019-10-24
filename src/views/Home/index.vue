<template>
  <div class="Home">
    <m-fileUpload :action="'/api/files/addFile'"></m-fileUpload>
    <div class="btn">
      <Button type="info" @click="jump">create</Button>
    </div>
    <CustomRate :on="on" :off="off"/>
    <SlotT>
      <!-- <template slot="head">
                <h2>222222</h2>
      </template>-->
      <template v-slot:content>
        <h3>33333333</h3>
      </template>
      <template v-slot:footer>
        <h4>44444</h4>
      </template>
      <!-- 访问了子组件中的user通过slot作用域传递 -->
      <!-- 插槽内容的解构赋值 也可以重命名结构变量 eg：{user: person} -->
      <!-- v-slot:name可以简写成 #name  而 匿名插槽 #default-->
      <template v-slot:others="{ user:person}">{{ person.lastN}}</template>
    </SlotT>
  </div>
</template>

<script>
import SlotT from "@/components/SlotT";
import CustomRate from "@/components/CustomRate";
import FileUpload from "@/components/FileUpload";
import { Button, Icon } from "iview";
export default {
  name: "home",
  components: {
    FileUpload,
    Button,
    CustomRate,
    Icon,
    SlotT
  },
  data() {
    return {
      on: "ios-heart",
      off: "ios-heart-outline"
    };
  },
  methods: {
    jump() {
      this.$router.push({
        name: "surprise"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div.btn {
  margin: 10px auto;
  text-align: center;
}
</style>