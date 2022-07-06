import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({}),
  getters: {
    slicedMessage(state) {
      //연결 확인용(글자 자르기)
      return state.message.slice(5, 11);
    },
  },
  actions: {
    splitMessage() {
      //연결 확인용(글자 뒤집기)
      this.message = this.message.split("").reverse();
    },
  },
});
