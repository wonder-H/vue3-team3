<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

export default {
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination, Scrollbar],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style scoped lang="scss">
div {
  height: 456px;
  background-color: #eee;
}
</style>
