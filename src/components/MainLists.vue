<template>
  <ListItem v-for="num in test" :key="num"></ListItem>
  {{ testStore.message }}
  {{ testStore.slicedMessage }}
  <!-- 아이템 1 2 3 ... -->
</template>

<script>
import ListItem from "./ListItem.vue";
import { mapStores } from "pinia";
import { useTestStore } from "../store/test";
export default {
  components: { ListItem },
  data() {
    return {
      test: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    ...mapStores(useTestStore, ["test"]),
  },
};
</script>
