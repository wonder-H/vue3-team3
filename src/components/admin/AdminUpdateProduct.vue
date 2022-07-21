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
      <div>기존 썸네일</div>
      <img
        ref="thumbnail"
        :src="teamStore.thatproduct.thumbnail"
      />
      <input type="file" @change="loadImage" />

      <div>기존 상세사진</div>
      <img :src="teamStore.thatproduct.photo" />
      <input type="file" @change="loadImage2" />

      <div>
        매진여부:
        {{
          teamStore.thatproduct.isSoldOut
            ? "매진되었음"
            : "재고 있음"
        }}
      </div>
      <!-- @change="soldOutHandler" -->
      <select @change="soldOutHandler">
        <option
          :value="true"
          :selected="
            teamStore.thatproduct.isSoldOut ? false : true
          "
        >
          매진
        </option>
        <option
          :value="false"
          :selected="
            teamStore.thatproduct.isSoldOut ? true : false
          "
        >
          재고 있음
        </option>
      </select>
    </form>
    <button
      @click="
        teamStore.updateProduct(
          this.$route.params.id,
          this.$refs.title.value,
          this.$refs.price.value,
          this.$refs.description.value,
          [this.$refs.tags.value],
          newThumbnail,
          newPhoto,
          Boolean(isSoldOut),
        )
      "
    >
      수정 완료
    </button>
    <button>수정 취소</button>
  </div>
</template>

<script>
// https://sfc.vuejs.org/#eNp9kUFLwzAYhv/KRy5TWNt7qQP/Ry7d8k072iQkaRVKQXS3eVBQGMLAwwSPHj34i2z3H/zauuGUCaXJm/flSXi/kp1q7Rc5spBFdmIS7UZc4qVWxoHAaZynDkouAUTs4qPjfg9g0OVGbhWAxRQnDkUIg0F/VrUL/eiLgh2ZhMNMp7FDUgCRSIpRM3/e3Kzqu9cQynKHgqqKgtZuc122d6DwMiUwPeFsG+WsC1FEaZcoCSKx8TglRhGnOVKSEvVi3axuoVnfw+ZxWV8v65cP6K8m3czfm6eHKOgB+7jR59vVAYcwh5zFes+hErrXkoiCXQdsyJKsLdvLYu3PrJI0iK5V/m1YzqiWns0ZTarVnJ07p20YBHY6acc3s74yZwHtfJNLl2Too828sVEXFg2BORv+YNBbTIHGMygFGjT/MX9F/3C3c2bVF5cz2bQ=
//
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";

import NavBtnList from "../NavBtnList.vue";

export default {
  data() {
    return {
      isSoldOut: null,
      newThumbnail: null,
      newPhoto: null,
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    NavBtnList,
  },
  methods: {
    loadImage(e) {
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", async (e) => {
          this.newThumbnail = await e.target.result;
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
          this.newPhoto = await e.target.result;
        });
      }
    },

    soldOutHandler(e) {
      this.isSoldOut = e.target.value;
    },
  },

  created() {
    this.teamStore.readProduct(this.$route.params.id);
  },
};
</script>

<style lang="scss">
img {
  width: 200px;
}
</style>
