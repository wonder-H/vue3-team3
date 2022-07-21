<template>
  <!-- <div v-for="searchResult in teamStore.searchResults">
    "{{ searchResult.title }}" 상품, id:
    {{ searchResult.id }}
    <button
      @click="
        $router.push(`/productdetail/${searchResult.id}`)
      "
    >
      해당 아이디 구매페이지로 이동
    </button>
  </div> -->
  <!-- v-for="item in this.teamStore.searchResults" -->
  <div
    class="wrapper"
    v-for="item in this.teamStore.products"
  >
    <h2>{{ item.title }}</h2>
    <ul class="main-lists">
      <li>
        <div class="main-lists__img"></div>
      </li>
      <li>
        <MainListSlider />
      </li>
    </ul>
  </div>
</template>
<script>
import MainListSlider from "../MainListSlider.vue";
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  data() {
    return {
      // allResults: null,
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    MainListSlider,
  },
  async created() {
    this.allResults = await this.teamStore.allProducts();
    // this.allResults = this.teamStore.allProducts();
    console.log(this.teamStore.products);
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 1044px;
  margin: 0 auto;
  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 76px;
    text-indent: 12px;
  }
  .main-lists {
    display: flex;
    height: 304px;
    li {
      width: 25%;
      .main-lists__img {
        width: auto;
        height: 100%;
        background-color: #d9d9d9;
        margin: 0 6px;
        border-radius: 10px;
      }
    }
    li:last-child {
      width: 75%;
    }
  }
}
</style>
