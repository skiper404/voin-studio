<script setup>
import IconPortfolio from "./icons/IconPortfolio.vue";
import ProjectOne from "./ProjectOne.vue";
import ProjectTwo from "./ProjectTwo.vue";
import ProjectThree from "./ProjectThree.vue";
</script>

<template>
  <div
    id="portfolio"
    class="relative flex flex-col items-center px-1 pt-20 text-white lg:px-10"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 flex items-center gap-2 text-2xl font-extralight text-green-500"
    >
      <IconPortfolio />
      Портфолио
    </div>
    <div class="z-10 mt-10 grid w-full grid-cols-1 gap-10 text-2xl">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  </div>
</template>
