<template>
  <ul class="main-lists">
    <li>
      <div class="main-lists__img"></div>
    </li>
    <li>
      <MainListSlider />
    </li>
  </ul>
</template>
<script>
import MainListSlider from "../MainListSlider.vue";

export default {
  components: {
    MainListSlider,
  },
};
</script>

<style scoped lang="scss">
.main-lists {
  display: flex;
  height: 304px;
  li {
    width: 100%;
    .main-lists__img {
      width: 100%;
      height: 100%;
      background-color: #d9d9d9;
    }
  }
  li:last-child {
    width: 75%;
  }
}
</style>
