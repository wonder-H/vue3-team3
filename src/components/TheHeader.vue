<template>
  <header>
    <SearchInput />
    <div class="inner">
      <div>하나투어</div>
      <ul>
        <li>여수</li>
      </ul>
      <div>회원 아이콘</div>
    </div>
  </header>
</template>

<script>
import SearchInput from "./SearchInput.vue";
export default {
  components: { SearchInput },
};
</script>

<style scoped lang="scss"></style>
