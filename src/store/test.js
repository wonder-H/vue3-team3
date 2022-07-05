import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    //글자 원본
    message: "피니아 연결 확인용! store에 이 메시지 있다",
  }),
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
