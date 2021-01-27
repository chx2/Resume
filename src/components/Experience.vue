<template>
  <h2 class="text-xl font-bold pb-4">Experience</h2>

  <div v-for="item in items" :key="item.name">
    <h3 class="text-lg lg:ml-8">{{ item.name }} | {{ item.org }} | {{ item.start }} – {{ item.end }}</h3>
    <ul class="ml-8 lg:ml-16 list-inside list-disc" v-for="(task, index) in item.tasks">
      <li>{{ task }}</li>
    </ul>
  </div>
</template>

<script>
import json from "../data/experience.json"
export default {
  name: "Experience",
  data() {
    return {
      items: json
    }
  }
}
</script>

<style scoped>

</style>
