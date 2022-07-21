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
      v-for="searchResult in filteredResults"
      @click="
        $router.push(`/productdetail/${searchResult.id}`)
      "
    >
      <div class="wrapper">
        <div
          class="img"
          :style="{
            'background-image': `url(
              ${searchResult.thumbnail})`,
          }"
        ></div>
        <div class="contents">
          <h2>
            {{ searchResult.title }}
          </h2>
          <span>
            {{ searchResult.description }}
          </span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

export default {
  data() {
    return {
      filteredResults: null,
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Keyboard],
    };
  },
  async mounted() {
    // console.log(this.teamStore.searchResults);

    await this.teamStore.searchProducts();

    this.filteredResults =
      this.teamStore.searchResults.filter(
        (item) => item.tags[0] === "힐링",
      );
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
  .swiper-slide {
    .wrapper {
      cursor: pointer;
      margin: 0 6px;
      .img {
        width: auto;
        height: 152px;
        border-radius: 10px;
        background-color: #d9d9d9;
        background-size: cover;
        background-position: center;
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
    opacity: 0.8;
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
