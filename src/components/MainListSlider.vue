<template>
  <swiper
    :slidesPerView="3"
    :cssMode="true"
    :navigation="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="main-list-swiper"
  >
    <swiper-slide
      ><div class="wrapper">
        <div class="img"></div>
        <div class="contents">
          <h2>자연과 함께하는 힐링, 영월</h2>
          <span
            >자연이 빚어낸 도시, 영월의 자연을 듬뿍 느낄 수
            있는 여행 코스</span
          >
        </div>
      </div> </swiper-slide
    ><swiper-slide
      ><div class="wrapper">
        <div class="img"></div>
        <div class="contents">
          <h2>자연과 함께하는 힐링, 영월</h2>
          <span
            >자연이 빚어낸 도시, 영월의 자연을 듬뿍 느낄 수
            있는 여행 코스</span
          >
        </div>
      </div> </swiper-slide
    ><swiper-slide
      ><div class="wrapper">
        <div class="img"></div>
        <div class="contents">
          <h2>자연과 함께하는 힐링, 영월</h2>
          <span
            >자연이 빚어낸 도시, 영월의 자연을 듬뿍 느낄 수
            있는 여행 코스</span
          >
        </div>
      </div> </swiper-slide
    ><swiper-slide
      ><div class="wrapper">
        <div class="img"></div>
        <div class="contents">
          <h2>자연과 함께하는 힐링, 영월</h2>
          <span
            >자연이 빚어낸 도시, 영월의 자연을 듬뿍 느낄 수
            있는 여행 코스</span
          >
        </div>
      </div> </swiper-slide
    ><swiper-slide
      ><div class="wrapper">
        <div class="img"></div>
        <div class="contents">
          <h2>자연과 함께하는 힐링, 영월</h2>
          <span
            >자연이 빚어낸 도시, 영월의 자연을 듬뿍 느낄 수
            있는 여행 코스</span
          >
        </div>
      </div> </swiper-slide
    ><swiper-slide
      ><div class="wrapper">
        <div class="img"></div>
        <div class="contents">
          <h2>자연과 함께하는 힐링, 영월</h2>
          <span
            >자연이 빚어낸 도시, 영월의 자연을 듬뿍 느낄 수
            있는 여행 코스</span
          >
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
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
      modules: [Navigation, Pagination, Keyboard],
    };
  },
};
</script>
<style lang="scss">
.main-list-swiper:hover .swiper-button-prev,
.main-list-swiper:hover .swiper-button-next {
  display: flex;
}
.main-list-swiper {
  height: 100%;
  .wrapper {
    margin: 0 6px;
    .img {
      width: auto;
      height: 152px;
      border-radius: 10px;
      background-color: #d9d9d9;
    }
    .contents {
      padding-top: 28px;
      h2 {
        font-size: 16px;
        margin-bottom: 4px;
        font-weight: 700;
      }
      span {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .swiper-wrapper > div {
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    height: 100%;
    margin: 0;
    background-color: #fff;
    width: 72px;
    opacity: 80%;
    display: none;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 28px;
    color: #000;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-disabled {
    opacity: 20%;
  }
}
</style>
