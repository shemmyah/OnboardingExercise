<template>
  <div class="global-search">
    <q-input
      filled
      v-model="globalSearch"
      placeholder="Search Filter..."
      @input="onInput"
    >
      <template #prepend>
        <q-icon name="search" class="gl-search"></q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    onGlobalSearch: Function,
  },
  setup() {
    const globalSearch = ref("");

    const onInput = () => {
      if (typeof this.onGlobalSearch === "function") {
        this.onGlobalSearch(globalSearch.value);
      }
    };

    return {
      globalSearch,
      onInput,
    };
  },
};
</script>

<style scoped>
.global-search {
  margin-bottom: 10px;
}
</style>
