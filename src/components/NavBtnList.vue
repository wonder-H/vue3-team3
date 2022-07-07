<template>
  <ul>
    <li @click="createList">서울</li>
    <li @click="createList">경기</li>
    <li @click="createList">강원</li>
    <li @click="createList">충청</li>
    <li @click="createList">전라</li>
    <li @click="createList">경상</li>
    <li @click="createList">제주</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    createList() {
      console.log("버튼 누름!");
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  li {
    list-style: none;
  }
}
</style>
