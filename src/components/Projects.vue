<template>
  <div class="no-break">
    <h2 class="text-xl font-bold pb-4">Projects</h2>

    <div v-for="item in items" :key="item.name">
      <h3 class="text-lg lg:ml-8">{{ item.name }} | <a class="underline" :href="item.url">{{ item.url_short }}</a></h3>
      <p class="ml-8 lg:ml-16">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import json from "../data/projects.json";

export default {
  name: "Projects",
  data() {
    return {
      items: json
    }
  }
}
</script>

<style scoped>
  .no-break {
    break-inside: avoid;
  }
</style>
