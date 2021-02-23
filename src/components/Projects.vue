<template>
  <div class="no-break">
    <h2 class="text-xl font-bold pb-4">Projects</h2>

    <div v-for="item in items" :key="item.name">
      <h3 class="text-lg lg:ml-8">{{ item.name }} |
        <a class="underline" :href="item.url">{{ item.url_short }}</a>
        <span v-for="(skill, index) in item.skills"
            class="print:hidden m-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
            {{ skill }}
        </span>
      </h3>
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
