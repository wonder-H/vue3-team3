<template>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="main-swiper"
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
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
      ],
    };
  },
};
</script>

<style lang="scss">
.main-swiper .swiper-wrapper {
  height: 456px;
}
.main-swiper .swiper-button-prev,
.main-swiper .swiper-button-next {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.2);
}
.main-swiper .swiper-button-next:after,
.main-swiper .swiper-button-prev:after {
  font-size: 14px;
  color: #000;
}
.main-swiper .swiper-horizontal {
  .swiper-pagination-bullets {
    bottom: 42px;
  }
}
.main-swiper .swiper-horizontal {
  .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      background: #000;
    }
  }
}
</style>
