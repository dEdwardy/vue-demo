<template>
  <div class="customRate">
    <div class="customRate-container">
      <span v-for="(star, index) in stars" :key="index" @click="clickStart(index)">
        <Icon :type="star ? off : on" :color="color" :size="size" style=" cursor: pointer;" />
      </span>
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";
export default {
  name: "custom-rate",
  props: {
    off: {
      type: String,
      default: "ios-star"
    },
    on: {
      type: String,
      default: "ios-star-outline"
    },
    color:{
        default:'red'
    },
    size:{
        default:30
    }
  },
  components: {
    Icon
  },
  data() {
    return {
        rating:0
    };
  },
  methods: {
    clickStart(index) {
      this.rating = index + 1;
    }
  },
  computed: {
    stars() {
      return [1, 2, 3, 4, 5].map(value => {
        return this.rating < value;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.customRate-container {
  span {
    cursor: pointer;
  }
}
</style>