<template>
  <div class="right">
    <h1>관리자 제품 수정 페이지</h1>
    <hr />
    <NavBtnList />
    <form>
      <input
        ref="title"
        :value="teamStore.thatproduct.title"
      />
      <input
        ref="price"
        :value="teamStore.thatproduct.price"
      />
      <textarea
        ref="description"
        :value="teamStore.thatproduct.description"
      ></textarea>
      <input
        ref="tags"
        placeholder="태그칸"
        :value="teamStore.thatproduct.tags"
      />
      <input
        ref="thumbnail"
        placeholder="썸네일칸"
        :value="teamStore.thatproduct.thumbnail"
      />
      <input
        ref="photo"
        placeholder="사진칸"
        :value="teamStore.thatproduct.photo"
      />
      <input ref="isSoldOut" placeholder="매진여부" />
    </form>
    <button
      @click="
        teamStore.updateProduct(
          this.$route.params.id,
          this.$refs.title.value,
          this.$refs.price.value,
          this.$refs.description.value,
          this.$refs.tags.value,
          this.$refs.thumbnail.value,
          this.$refs.photo.value,
          this.$refs.isSoldOut.value,
        )
      "
    >
      수정 완료
    </button>
    <button>수정 취소</button>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";

import NavBtnList from "../NavBtnList.vue";

export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    NavBtnList,
  },

  created() {
    this.teamStore.readProduct(this.$route.params.id);
  },
};
</script>
