<template>
  <div class="w-full md:w-4/5 m-auto">
    <div class="block lg:flex lg:mt-8 bg-white rounded print:rounded-none print:shadow-none shadow-2xl lg:mb-8">
      <div class="w-full lg:w-1/4 bg-white md:bg-gray-700 shadow-2xl">
        <div class="h-52 hidden md:block">
          <img class="w-full h-full max-w-lg m-auto shadow-2xl" src="./assets/me.png" alt="Personal Thumbnail">
        </div>
        <div class="md:p-4 text-white">
          <div class="hidden md:block">
            <contact></contact>
            <skills></skills>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-3/4 ml-auto p-4">
        <div class="flex justify-center items-center flex-col h-48 print:h-24 print:mt-4">
          <h1 class="text-4xl font-bold pb-4">Chris Hackett</h1>
          <h2 class="text-2xl font-bold">Full-Stack Developer</h2>
          <div class="md:hidden">
            <contact></contact>
          </div>
        </div>

        <div class="p-0 md:p-4">
          <div class="hidden print:block">
            <hr class="w-11/12 mt-4 print:mt-16 mb-4 ml-auto mr-auto border border-black">
          </div>
          <objective></objective>
          <hr class="w-11/12 mt-4 mb-4 ml-auto mr-auto border border-black">
          <experience></experience>
          <hr class="w-11/12 mt-4 mb-4 ml-auto mr-auto border border-black">
          <education></education>
          <hr class="w-11/12 mt-4 mb-4 ml-auto mr-auto border border-black">
          <projects></projects>
          <div class="block md:hidden">
            <hr class="w-11/12 mt-4 mb-4 ml-auto mr-auto border border-black">
            <skills></skills>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Experience from "./components/Experience.vue";
import Objective from "./components/Objective.vue";
import Education from "./components/Education.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Skills from "./components/Skills.vue";

export default {
  components: {Skills, Contact, Projects, Education, Objective, Experience},
  created() {
    if (window.screen.width < 1024) {
      this.mobile = true
    }
  },
  data() {
    return {
      mobile: false
    }
  }
}
</script>

<style>
  .page-break {
    page-break-after: always;
  }
</style>
