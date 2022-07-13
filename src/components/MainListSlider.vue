<template>
  <swiper
    :slidesPerView="3"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="main-list-swiper"
  >
    <swiper-slide>Slide 1</swiper-slide
    ><swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide
    ><swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide
    ><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide
    ><swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style lang="scss">
.main-list-swiper {
  height: 100%;
  .swiper-wrapper div {
    background-color: #d9d9d9;
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    height: 100%;
    margin: 0;
    background-color: #fff;
  }
  // .swiper-button-disabled {
  //   opacity: 0;
  // }
}
</style>
