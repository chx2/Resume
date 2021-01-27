<template>
  <div class="no-break">
    <h2 class="text-xl font-bold pb-4">Projects</h2>

    <h3 class="text-lg lg:ml-8">Portfolio | <a class="underline"  href="https://chrish.me">https://chrish.me</a></h3>
    <p class="ml-8 lg:ml-16">
      Created & maintaining personal platform listing personal experience including personal blog
      and all Laravel projects I maintain, all managed within a Laravel Forge instance.
    </p>

    <h3 class="text-lg lg:ml-8">Budget.io | <a class="underline"  href="https://github.com/chx2/Budget.io">https://github.com/chx2/Budget.io</a></h3>
    <p class="ml-8 lg:ml-16">
      Created & maintaining open-source application for managing personal budgets built
      in Laravel using Inertia.js integrations with Vue.js.
    </p>

    <h3 class="text-lg lg:ml-8">Parse-Steam-URL | <a class="underline" href="https://github.com/chx2/Parse-Steam-URL-Class">https://github.com/chx2/Parse-Steam-URL-Class</a></h3>
    <p class="ml-8 lg:ml-16">
      Created & maintaining a lightweight PHP helper class for converting between
      different ID formats on the Steam desktop platform.
    </p>

    <h3 class="text-lg lg:ml-8">EasyDocs | <a class="underline" href="https://github.com/chx2/EasyDocs">https://github.com/chx2/EasyDocs</a></h3>
    <p class="ml-8 lg:ml-16">
      Created an open-source application for generating and serving markdown-based documentation.
      It supports editing via the built-in admin panel or manual editing of markdown files.
    </p>
  </div>
</template>

<script>
export default {
name: "Projects"
}
</script>

<style scoped>
.no-break {
  break-inside: avoid;
}
</style>
