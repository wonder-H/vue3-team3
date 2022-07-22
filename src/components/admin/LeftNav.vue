<template lang="">
  <div class="left-nav">
    <div>FASTOUR</div>
    <hr />
    <div class="menu">
      <router-link to="/admin/allproducts"
        >모든 제품 조회</router-link
      >
      |
      <router-link to="/admin/addproduct"
        >제품 추가</router-link
      >
      |
      <router-link to="/admin/alltransactions"
        >전체 거래 내역</router-link
      >
      |
      <!-- <button @click="$router.push('/allproducts')">
        모든 제품 조회
      </button>
      <hr />
      <button @click="$router.push()">제품 추가</button>
      <hr />
      <button @click="$router.push()">
        전체 거래 내역
      </button> -->
      <div>
        <hr />
        <button @click="$router.push('/')">홈</button>
        |
        <button
          @click="$router.push('/'), teamStore.logout()"
        >
          로그아웃
        </button>
        |
      </div>
    </div>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>
<style lang="scss">
.left-nav {
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  border: 1px solid black;
}
</style>
