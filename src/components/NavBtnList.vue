<template>
  <ul class="gnb-menu">
    <li @click="createList" class="on">서울</li>
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
ul.gnb-menu {
  display: flex;
  margin: 0;
  li {
    list-style: none;
    color: #555555;
    padding: 6px 14px 8px 14px;
    border-radius: 6px;
    height: fit-content;
    font-size: 16px;
  }
  li.on {
    background-color: #ed234b;
    color: #fff;
  }
}
</style>
