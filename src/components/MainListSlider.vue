<template>
  <div class="swiper menu">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 01</div>
      <div class="swiper-slide">Slide 02</div>
      <div class="swiper-slide">Slide 03</div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper, {
  Navigation,
  Autoplay,
  Pagination,
  Grid,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  mounted() {
    new Swiper(".swiper.menu", {
      modules: [Navigation, Autoplay, Pagination, Grid],
      // autoplay: {
      //   delay: 3000,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      // grid: {
      //   rows: 1,
      // },
    });
  },
};
</script>
<style scoped lang="scss">
.swiper-wrapper {
  height: 456px;
}

.swiper-button-prev,
.swiper-button-next {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.2);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 14px;
  color: #000;
}

.swiper-horizontal {
  .swiper-pagination-bullets {
    bottom: 42px;
  }
}
</style>

<style lang="scss">
.swiper01-horizontal {
  .swiper01-pagination-bullets {
    .swiper01-pagination-bullet {
      background: #000;
    }
  }
}
</style>
