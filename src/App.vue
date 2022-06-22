<template>
  <TheHeader />
  <TheSection />
  <TheFooter />
  <RouterView />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheSection from "./components/TheSection.vue";

export default {
  components: {
    TheHeader,
    TheSection,
    TheFooter,
  },
};
</script>

<style lang="scss">
/* 적용 테스트 */
#app {
  color: #444;

  &:hover {
    color: rgb(86, 137, 9);
  }
}
</style>
