<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <h1>test</h1>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: green;

  &:hover {
    color: greenyellow;
  }
}
</style>
