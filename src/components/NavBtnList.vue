<template>
  <!--  style="display: flex" -->
  <ul class="gnb-menu">
    <li v-for="region in regions">
      <input
        name="지역"
        :checked="region === '서울' ? 'checked' : null"
        :id="region"
        type="radio"
        :value="region"
        @change="teamStore.selectedRegion = region"
      />
      <label
        :for="region"
        :class="{
          selected: teamStore.selectedRegion === region,
        }"
      >
        {{ region }}</label
      >
    </li>
    <div>선택된 지역: {{ teamStore.selectedRegion }}</div>
  </ul>
  <!-- 방법2: :class="
        teamStore.selectedRegion === region
          ? 'selected'
          : null
      " -->

  <!-- 
  <ul class="gnb-menu">
    <li @click="createList" class="on">서울</li>
    <li @click="createList">경기</li>
    <li @click="createList">강원</li>
    <li @click="createList">충청</li>
    <li @click="createList">전라</li>
    <li @click="createList">경상</li>
    <li @click="createList">제주</li>
  </ul> -->
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
export default {
  data() {
    return {
      regions: [
        "서울",
        "경기",
        "강원",
        "충청",
        "전라",
        "경상",
        "제주",
      ],
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
  methods: {},
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  margin: 0;
  li {
    input {
      display: none;
    }
    label {
      margin: 0 5px 0;
      padding: 20px;
      color: #555555;
      padding: 6px 14px 8px 14px;
      border-radius: 6px;
      height: fit-content;
      font-size: 16px;
      cursor: pointer;
    }
    .selected {
      background-color: #ed234b;
      color: #fff;
    }
  }
}
</style>
