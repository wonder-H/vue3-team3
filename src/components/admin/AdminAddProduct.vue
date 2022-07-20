<template>
  <div class="right">
    <div>제품 추가하기</div>
    <hr />
    <NavBtnList />
    <form>
      <input v-model="title" placeholder="상품명" />
      <input v-model="price" placeholder="상품 가격" />
      <input
        v-model="description"
        placeholder="상품 설명"
      />
      <input v-model="tags" placeholder="키워드" />
      <div>썸네일 사진을 첨부해주세요</div>
      <input
        ref="thumbnailBase64"
        type="file"
        @change="loadImage"
      />
      <img
        v-if="thumbnailBase64"
        :src="thumbnailBase64"
        alt="thumbnailBase64그림"
      />

      <div>상세사진을 첨부해주세요</div>
      <input
        ref="photoBase64"
        type="file"
        @change="loadImage2"
      />
      <img
        v-if="photoBase64"
        :src="photoBase64"
        alt="photoBase64그림"
      />
      <!-- <input ref="photoBase64" type="file" @change="" /> -->
    </form>
    <button
      @click="
        teamStore.addProduct(
          title,
          Number(price),
          description,
          [tags],
          thumbnailBase64.split(',')[1],
          photoBase64.split(',')[1],
        )
      "
    >
      제품 추가
    </button>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";

import NavBtnList from "../NavBtnList.vue";

export default {
  data() {
    return {
      title: "",
      price: "",
      description: "",
      tags: "",
      thumbnailBase64: "",
      photoBase64: "",
    };
  },
  methods: {
    loadImage(e) {
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", async (e) => {
          this.thumbnailBase64 = await e.target.result; // data:image/jpeg;base64, qwhdfskldasjhfklasjdhfkjahdsfkjahsdfkjashdfkjhsdaf
        });
      }
    },

    loadImage2(e) {
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", async (e) => {
          this.photoBase64 = await e.target.result;
        });
      }
    },
  },
  computed: {
    ...mapStores(useTeamStore),
  },

  components: {
    NavBtnList,
  },
};
</script>

<style scoped lang="scss">
img {
  width: 200px;
}
</style>
