<script setup>
import IconPortfolio from "./icons/IconPortfolio.vue";
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
    <div class="z-10 mt-10 flex w-full flex-col items-center gap-10 text-2xl">
      <router-link :to="{ name: 'Project1' }" class="hover:text-orange-500"
        >Project 1</router-link
      >
      <router-link :to="{ name: 'Project2' }" class="hover:text-orange-500">
        Project 2
      </router-link>
      <router-link :to="{ name: 'Project3' }" class="hover:text-orange-500">
        Project 3
      </router-link>
    </div>
  </div>
</template>
