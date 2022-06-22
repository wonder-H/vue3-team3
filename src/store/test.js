import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    message: "피니아가 지켜보고이똬!",
  }),
  getters: {
    slicedMessage(state) {
      return state.message.slice(5, 11);
    },
  },
  actions: {
    splitMessage() {
      this.message = this.message.split("").reverse();
    },
  },
});
