<template>
  <h2 class="font-bold lg:font-normal lg:text-center text-2xl mt-4">Skills</h2>

  <hr class="w-11/12 lg:mt-4 mb-4 ml-auto mr-auto border border-white">
  <div class="ml-4" v-for="item in items" :key="item.name">
    <h3 class="text-lg">{{ item.name }}</h3>
    <ul class="ml-8 list-inside list-disc" v-for="(skill, index) in item.skills">
      <li>{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
import json from "../data/skills.json"
export default {
  name: "Skills",
  data() {
    return {
      items: json
    }
  }
}
</script>

<style scoped>

</style>
