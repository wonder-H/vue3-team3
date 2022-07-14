<template>
  <div v-for="searchResult in teamStore.searchResults">
    "{{ searchResult.title }}" 상품, id:
    {{ searchResult.id }}
    <button
      @click="
        $router.push(`/productdetail/${searchResult.id}`)
      "
    >
      해당 아이디 구매페이지로 이동
    </button>
  </div>

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
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    MainListSlider,
  },
  created() {
    this.teamStore.searchProducts();
  },
};
</script>

<style scoped lang="scss">
.main-lists {
  display: flex;
  height: 304px;
  li {
    width: 100%;
    margin: 0 6px;
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
